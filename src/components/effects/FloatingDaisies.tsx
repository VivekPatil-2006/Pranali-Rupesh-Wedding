"use client";

import Image from "next/image";

const flowers = Array.from({ length: 12 });

export default function FloatingDaisies() {
  return (
    <>
      {flowers.map((_, index) => {
        const left = Math.random() * 100;
        const duration = 14 + Math.random() * 20;
        const delay = Math.random() * 10;
        const size = 15 + Math.random() * 15;

        return (
          <div
            key={index}
            className="pointer-events-none fixed top-0 z-40"
            style={{
              left: `${left}%`,
              animation: `floatPetal ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Image
              src="/assets/falling-daisy.png"
              alt=""
              width={size}
              height={size}
            />
          </div>
        );
      })}
    </>
  );
}