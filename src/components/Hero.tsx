import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { LazyVideo } from "./LazyVideo";
import heroAfterVideo from "../assets/hero/hero-after.mp4";
import heroBeforeImage from "../assets/hero/hero-before.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export const Hero = () => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  return (
    <section className="container grid place-items-center py-20 md:py-32 gap-10">
      <div className="text-center space-y-6">
        {/* Badge */}
        <Badge variant="secondary" className="text-base py-2.5 px-5">
          ✨ Perfect for Etsy, Instagram, TikTok & YouTube
        </Badge>

        {/* Main Headline */}
        <main className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl mx-auto">
          <h1>
            Professional AI Model Videos for Your Fashion Products.
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
              Without Hiring Models or Renting Studios.
            </span>
          </h1>
        </main>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Upload your photo. Get 5 professional videos in 5 minutes. Only $4.99.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            ✓ Etsy, Instagram, TikTok, YouTube
          </span>
          <span className="flex items-center gap-2">
            ✓ Full Commercial Rights
          </span>
          <span className="flex items-center gap-2">
            ✓ Ready in 5 Minutes
          </span>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center gap-2">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a
              href="https://forms.fillout.com/t/wAc48jcQMTus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create My First Video →
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Get 5 videos instantly • Only $4.99
          </p>
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="w-full max-w-6xl">
        {/* Desktop: Split Screen */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* LEFT: You Upload */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-base py-2 px-4">
                📸 You upload
              </Badge>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <img
                src={heroBeforeImage}
                alt="Simple phone photo"
                className="w-full h-auto object-cover aspect-[9/16]"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Simple phone photo
            </p>
          </div>

          {/* RIGHT: You Get */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-base py-2 px-4">
                ✨ You get
              </Badge>
            </div>
            <div className="rounded-lg overflow-hidden border relative">
              <LazyVideo
                src={heroAfterVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover aspect-[9/16]"
                preload="metadata"
              />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  📱 9:16 Format
                </Badge>
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  ⏱️ Ready in 5 min
                </Badge>
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  🎥 1080p HD
                </Badge>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Professional AI model video
            </p>
          </div>
        </div>

        {/* Mobile: Video First with Button */}
        <div className="md:hidden space-y-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-base py-2 px-4">
              ✨ You get
            </Badge>
          </div>
          <div className="rounded-lg overflow-hidden border relative">
            <LazyVideo
              src={heroAfterVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover aspect-[9/16]"
              preload="metadata"
            />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">
                📱 9:16 Format
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">
                ⏱️ Ready in 5 min
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">
                🎥 1080p HD
              </Badge>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => setShowPhotoModal(true)}
            >
              👁️ See original photo
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Professional AI model video
          </p>
        </div>
      </div>

      {/* Mobile Photo Modal */}
      <Dialog open={showPhotoModal} onOpenChange={setShowPhotoModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Original Product Photo</DialogTitle>
          </DialogHeader>
          <div className="rounded-lg overflow-hidden">
            <img
              src={heroBeforeImage}
              alt="Original product photo"
              className="w-full h-auto object-cover aspect-[9/16]"
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Simple phone photo uploaded
          </p>
        </DialogContent>
      </Dialog>

      {/* Scroll Indicator */}
      <div className="text-center text-sm text-muted-foreground animate-bounce">
        <p>Scroll to explore ↓</p>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
