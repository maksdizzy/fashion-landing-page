import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
}

export const LazyVideo = ({
  src,
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  poster,
  preload = "none",
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Intersection Observer для lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Загружаем видео только когда оно появляется во viewport
            if (videoElement.dataset.src) {
              videoElement.src = videoElement.dataset.src;
              videoElement.load();
              setIsLoaded(true);

              // Если autoPlay включен, запускаем после загрузки
              if (autoPlay) {
                videoElement.play().catch(() => {
                  // Игнорируем ошибки автовоспроизведения
                });
              }
            }
          }
        });
      },
      {
        rootMargin: "50px", // Начинаем загрузку за 50px до появления
        threshold: 0.1,
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay, isLoaded]);

  return (
    <video
      ref={videoRef}
      data-src={src}
      className={className}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      poster={poster}
      preload={preload}
    />
  );
};
