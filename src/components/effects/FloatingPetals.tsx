"use client";

import Image from "next/image";

const petals = Array.from({ length: 20 });

export default function FloatingPetals() {
  return (
    <>
      {petals.map((_, index) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 15;
        const delay = Math.random() * 10;
        const size = 20 + Math.random() * 20;

        return (
          <div
            key={index}
            className="pointer-events-none fixed top-0 z-50"
            style={{
              left: `${left}%`,
              animation: `floatPetal ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Image
              src="/assets/falling-rose-petal.png"
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