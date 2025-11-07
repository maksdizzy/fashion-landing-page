#!/bin/bash

###############################################################################
# Video Optimization Script
#
# Optimizes all MP4 videos using FFmpeg with web-optimized settings
#
# Requirements: FFmpeg (brew install ffmpeg)
# Usage: ./scripts/optimize-videos.sh
###############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Settings
CRF=28              # Quality (23-28 recommended for web)
PRESET="slow"       # Encoding speed (slow = better compression)
SCALE="1080:1920"   # 9:16 aspect ratio
PROFILE="baseline"  # Compatibility
LEVEL="3.0"         # Compatibility

echo -e "${BLUE}🎥 Video Optimization Script${NC}"
echo "================================"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${RED}❌ FFmpeg is not installed!${NC}"
    echo "   Install with: brew install ffmpeg (macOS)"
    echo "   or: sudo apt install ffmpeg (Linux)"
    exit 1
fi

# Directories to process
DIRS=(
    "src/assets/hero"
    "src/assets/social-proof"
)

total_original=0
total_optimized=0
count=0

for dir in "${DIRS[@]}"; do
    if [ ! -d "$dir" ]; then
        echo -e "${YELLOW}⚠️  Directory not found: $dir${NC}"
        continue
    fi

    mp4_files=$(find "$dir" -name "*-after.mp4" -o -name "hero-after.mp4")
    file_count=$(echo "$mp4_files" | grep -c "mp4" || true)

    if [ $file_count -eq 0 ]; then
        echo -e "${YELLOW}⚠️  No MP4 files found in $dir${NC}"
        continue
    fi

    echo -e "\n${BLUE}📁 Processing $dir... ($file_count videos)${NC}"

    for input in $mp4_files; do
        if [ ! -f "$input" ]; then
            continue
        fi

        # Create output filename
        output="${input%.mp4}-optimized.mp4"

        # Skip if already optimized
        if [ -f "$output" ]; then
            echo -e "${YELLOW}⊘  Skipping $(basename "$input") (already optimized)${NC}"
            continue
        fi

        echo -e "  ${GREEN}Processing:${NC} $(basename "$input")"

        # Get original size
        original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input")

        # Optimize video
        ffmpeg -i "$input" \
            -vf "scale=$SCALE" \
            -c:v libx264 \
            -preset "$PRESET" \
            -crf "$CRF" \
            -profile:v "$PROFILE" \
            -level "$LEVEL" \
            -movflags +faststart \
            -an \
            "$output" \
            -y \
            -hide_banner \
            -loglevel error

        # Get optimized size
        optimized_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output")

        # Calculate savings
        original_mb=$(echo "scale=2; $original_size / 1048576" | bc)
        optimized_mb=$(echo "scale=2; $optimized_size / 1048576" | bc)
        savings=$(echo "scale=1; (1 - $optimized_size / $original_size) * 100" | bc)

        echo -e "    ${original_mb} MB → ${optimized_mb} MB (${savings}% savings)"

        total_original=$((total_original + original_size))
        total_optimized=$((total_optimized + optimized_size))
        count=$((count + 1))
    done
done

echo ""
echo "================================"
echo -e "${BLUE}📊 Summary:${NC}"
echo "   Optimized: $count videos"

if [ $count -gt 0 ]; then
    total_original_mb=$(echo "scale=2; $total_original / 1048576" | bc)
    total_optimized_mb=$(echo "scale=2; $total_optimized / 1048576" | bc)
    total_savings_mb=$(echo "scale=2; $total_original_mb - $total_optimized_mb" | bc)
    total_savings_pct=$(echo "scale=1; (1 - $total_optimized / $total_original) * 100" | bc)

    echo "   Original: ${total_original_mb} MB"
    echo "   Optimized: ${total_optimized_mb} MB"
    echo "   Savings: ${total_savings_mb} MB (${total_savings_pct}%)"
fi

echo ""
echo -e "${GREEN}✅ Done!${NC}"
echo "   Review the optimized files and replace originals if satisfied"
echo "   To replace: for f in *-optimized.mp4; do mv \"\$f\" \"\${f/-optimized/}\"; done"
