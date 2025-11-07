# Рекомендации по дальнейшей оптимизации медиа

## ✅ Что уже реализовано

### 1. Lazy Loading для видео
- **LazyVideo компонент** с Intersection Observer API
- Видео загружаются только когда появляются во viewport
- Экономия: ~25 MB на первоначальной загрузке
- `rootMargin: 50px` - предзагрузка перед появлением

### 2. Lazy Loading для изображений
- `loading="lazy"` для всех изображений
- Нативная браузерная оптимизация

### 3. Preload критических ресурсов
- Hero видео и изображение загружаются приоритетно
- Улучшает Largest Contentful Paint (LCP)

### 4. Оптимизация preload
- `preload="none"` для carousel видео
- `preload="metadata"` для hero видео

## 🎯 Рекомендации по сжатию медиа

### Критичные проблемы (сделать в первую очередь)

#### 1. Сжатие изображения 2-before.jpg (2.3 MB → ~150 KB)
```bash
# Установить ImageMagick или Sharp
npm install sharp --save-dev

# Создать скрипт оптимизации
node scripts/optimize-images.js
```

**Скрипт оптимизации (scripts/optimize-images.js):**
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/social-proof';
const outputDir = './src/assets/social-proof-optimized';

// Создать output директорию
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Оптимизировать все JPG изображения
fs.readdirSync(inputDir)
  .filter(file => file.endsWith('.jpg'))
  .forEach(async (file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.jpg', '.webp'));

    await sharp(inputPath)
      .resize(1080, 1920, { // 9:16 aspect ratio
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 }) // WebP с качеством 85%
      .toFile(outputPath);

    console.log(`✓ Optimized: ${file}`);
  });
```

**Ожидаемый результат:**
- 2-before.jpg: 2.3 MB → ~150 KB (WebP)
- Все JPG → WebP: экономия ~50-70%

#### 2. Сжатие видео (28.4 MB → ~12-15 MB)

**FFmpeg команды для оптимизации:**
```bash
# Установить ffmpeg
brew install ffmpeg  # macOS
# или
sudo apt install ffmpeg  # Linux

# Оптимизировать одно видео
ffmpeg -i input.mp4 \
  -vf "scale=1080:1920" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -profile:v baseline \
  -level 3.0 \
  -movflags +faststart \
  -an \
  output.mp4

# Batch скрипт для всех видео
for file in src/assets/**/*-after.mp4; do
  ffmpeg -i "$file" \
    -vf "scale=1080:1920" \
    -c:v libx264 \
    -preset slow \
    -crf 28 \
    -profile:v baseline \
    -level 3.0 \
    -movflags +faststart \
    -an \
    "${file%.mp4}-optimized.mp4"
done
```

**Параметры объяснены:**
- `scale=1080:1920` - точный размер для 9:16
- `crf 28` - качество (23-28 оптимально для веб)
- `preset slow` - лучшее сжатие
- `movflags +faststart` - быстрый старт воспроизведения
- `-an` - удалить аудио (если не нужно)

**Ожидаемая экономия:**
- hero-after.mp4: 5.0 MB → ~2 MB
- Каждое carousel видео: 2.5-5.6 MB → ~1-2.5 MB
- **Общая экономия: ~15-18 MB**

### Средний приоритет

#### 3. Адаптивные видео форматы
```html
<!-- Пример с fallback -->
<video>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

Конвертация в WebM:
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  output.webm
```

#### 4. Современные форматы изображений (AVIF)
```bash
# Конвертация в AVIF (лучшее сжатие)
npx avif --input src/assets/**/*.jpg --output src/assets-avif/
```

**Поддержка в компоненте:**
```tsx
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback" loading="lazy" />
</picture>
```

### Низкий приоритет (production only)

#### 5. CDN и кэширование
```javascript
// vercel.json или netlify.toml
{
  "headers": [
    {
      "source": "/(.*\\.(mp4|webm|jpg|webp|avif))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### 6. Responsive видео (разные размеры для мобильных)
```bash
# Мобильная версия (720p)
ffmpeg -i input.mp4 -vf "scale=720:1280" -crf 30 output-mobile.mp4

# Десктоп версия (1080p)
ffmpeg -i input.mp4 -vf "scale=1080:1920" -crf 28 output-desktop.mp4
```

Использование:
```tsx
<LazyVideo
  src={window.innerWidth > 768 ? videoDesktop : videoMobile}
  // ...
/>
```

## 📊 Ожидаемые результаты

### До оптимизации:
- **Первоначальная загрузка**: 32 MB
- **LCP (Largest Contentful Paint)**: ~3.5s
- **TTI (Time to Interactive)**: ~4.2s

### После базовой оптимизации (Lazy Loading):
- **Первоначальная загрузка**: ~7 MB (только hero)
- **LCP**: ~2.1s ✅ (улучшение 40%)
- **TTI**: ~2.5s ✅ (улучшение 40%)

### После полной оптимизации (+ сжатие):
- **Первоначальная загрузка**: ~3 MB
- **Полная загрузка**: ~14-17 MB (вместо 32 MB)
- **LCP**: ~1.5s ✅ (улучшение 57%)
- **TTI**: ~1.8s ✅ (улучшение 57%)
- **Экономия трафика**: ~15-18 MB (47-56%)

## 🛠️ Инструменты для мониторинга

### Lighthouse (Chrome DevTools)
```bash
npm install -g lighthouse
lighthouse http://localhost:5173 --view
```

### WebPageTest
https://www.webpagetest.org/

### Bundle Analysis
```bash
npm run build
npx vite-bundle-visualizer
```

## 📝 Чеклист оптимизации

- [x] Lazy loading для видео (LazyVideo компонент)
- [x] Lazy loading для изображений (loading="lazy")
- [x] Preload критических ресурсов
- [x] Оптимизация preload атрибутов
- [ ] Сжатие 2-before.jpg (2.3 MB)
- [ ] Конвертация JPG → WebP
- [ ] Оптимизация всех видео (FFmpeg)
- [ ] Адаптивные видео форматы (WebM)
- [ ] AVIF изображения (optional)
- [ ] CDN настройка (production)
- [ ] Responsive видео (optional)

## 🚀 Быстрый старт

1. **Сжать критичное изображение:**
```bash
npm install sharp --save-dev
node scripts/optimize-images.js
```

2. **Оптимизировать видео:**
```bash
brew install ffmpeg
./scripts/optimize-videos.sh
```

3. **Проверить результаты:**
```bash
npm run build
npm run preview
# Открыть Chrome DevTools → Lighthouse → Performance
```

## 💡 Дополнительные советы

1. **Прогрессивная загрузка**: Показывать placeholder пока видео грузится
2. **Intersection Observer margin**: Увеличить до 100px для более плавной загрузки
3. **Network throttling тест**: Проверить на 3G скорости
4. **Service Worker**: Кэшировать медиа для повторных посещений
5. **Компрессия Gzip/Brotli**: На сервере для всех ассетов

## 📚 Полезные ссылки

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse Scoring](https://web.dev/performance-scoring/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
