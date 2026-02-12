"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AppScreenshotsProps {
  screenshots: { url: string; alt: string }[];
}

export function AppScreenshots({ screenshots }: AppScreenshotsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            App Screenshots
          </h2>
          <p className="text-zinc-400">See the app in action</p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
          {/* Slide Container */}
          <div className="relative w-full aspect-[9/19.5] sm:aspect-[1/1.3] lg:aspect-[1200/630] flex items-center justify-center bg-black">
            {/* Mobile/Tablet Screen Preview */}
            <div className="relative w-full h-full flex items-center justify-center">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={screenshot.url}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                    priority={index === currentIndex}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Slide Indicators/Thumbnails */}
          {screenshots.length > 1 && (
            <div className="bg-zinc-950 px-4 py-4 border-t border-zinc-800">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? "border-emerald-500 opacity-100"
                        : "border-zinc-700 opacity-60 hover:opacity-80"
                    }`}
                    aria-label={`Go to ${screenshot.alt}`}
                  >
                    <Image
                      src={screenshot.url}
                      alt={screenshot.alt}
                      width={64}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Counter */}
          <div className="bg-zinc-950 px-4 py-3 text-center text-sm text-zinc-400 border-t border-zinc-800">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>
      </div>
    </section>
  );
}
