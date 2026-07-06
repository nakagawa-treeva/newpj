"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type PhotoCarouselProps = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export function PhotoCarousel({ images, alt, priority }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const go = (direction: number) => setIndex((value) => (value + direction + images.length) % images.length);

  return (
    <div className="photo-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="carousel-image"
          initial={{ opacity: 0, scale: 1.05, clipPath: "inset(0 26% 0 0)" }}
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)" }}
          exit={{ opacity: 0, scale: 1.02, clipPath: "inset(0 0 0 26%)" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={current} alt={alt} fill sizes="(max-width: 900px) 100vw, 72vw" priority={priority} />
        </motion.div>
      </AnimatePresence>
      <div className="carousel-controls">
        <button type="button" onClick={() => go(-1)} aria-label="前の写真">
          <ChevronLeft size={18} />
        </button>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => go(1)} aria-label="次の写真">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
