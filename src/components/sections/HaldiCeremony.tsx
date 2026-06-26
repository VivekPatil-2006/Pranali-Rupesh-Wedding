"use client";

import Image from "next/image";

export default function HaldiCeremony() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ========== HALDI CARD ========== */}
        <div
          className="
          relative
          border
          border-[#d4af37]
          overflow-hidden
          rounded-[32px]
          bg-[#fcf8f0]
          shadow-xl
          "
        >
          {/* Background */}
          <Image
            src="/assets/g-haldi-bg.png"
            alt="Haldi Background"
            fill
            priority
            className="object-cover opacity-30"
          />

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col items-center">
            {/* Glass Card */}
            <div
              className="
              w-[92%]
              mx-auto
              mt-8
              rounded-[36px]
              border-white/40
              bg-white/45
              backdrop-blur-md
              shadow-2xl
              text-center
              px-5
              py-10
              "
            >
              {/* Logo */}
              <div className="flex justify-center">
                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#b87333]
                  text-3xl
                  shadow-md
                  border
                  border-[#d4af37]/30
                  "
                >
                  <span className="text-2xl">🌿</span>
                </div>
              </div>

              

              {/* Main Title */}
              <h2
                className="
                font-title
                text-[#b45b14]
                text-3xl
                sm:text-4xl
                md:text-5xl
                mt-6
                tracking-[3px]
                sm:tracking-[4px]
                "
              >
                HALDI CEREMONY
              </h2>

              {/* Date */}
              <div
                className="
                inline-block
                mt-6
                px-6
                py-3
                rounded-full
                border
                border-[#d8b26f]
                bg-white/50
                font-semibold
                text-xs
                sm:text-sm
                md:text-base
                haldi
                "
              >
                Sunday, 19 JULY 2026 | 10:30 AM
              </div>
            </div>

            {/* Couple Image */}
            <div className="flex justify-center mt-8 w-full">
              <Image
                src="/assets/haldi.png"
                alt="Haldi Couple"
                width={340}
                height={340}
                className="
                w-full
                max-w-[300px]
                sm:max-w-[340px]
                object-contain
                drop-shadow-xl
                rounded-2xl
                "
              />
            </div>
          </div>
        </div>

        {/* ========== WEDDING CARD ========== */}
        <div
          className="
          relative
          border
          border-[#d4af37]
          overflow-hidden
          rounded-[40px]
          bg-[#fcf8f0]
          shadow-xl
          "
        >
          {/* Background */}
          <Image
            src="/assets/g-wedding-bg.png"
            alt="Wedding Background"
            fill
            priority
            className="object-cover opacity-30"
          />

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col items-center">
            {/* Glass Card */}
            <div
              className="
              w-[92%]
              mx-auto
              mt-8
              rounded-[36px]
              border-white/40
              bg-white/45
              backdrop-blur-md
              shadow-2xl
              text-center
              px-5
              py-10
              "
            >
              {/* Logo */}
              <div className="flex justify-center">
                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#8B1E2D]
                  text-3xl
                  shadow-md
                  border
                  border-[#d4af37]/30
                  "
                >
                  <span className="text-2xl">💐</span>
                </div>
              </div>


              {/* Main Title */}
              <h2
                className="
                font-title
                text-[#8B1E2D]
                text-3xl
                sm:text-4xl
                md:text-5xl
                mt-6
                tracking-[3px]
                sm:tracking-[4px]
                "
              >
                WEDDING CEREMONY
              </h2>

              {/* Date */}
              <div
                className="
                inline-block
                mt-6
                px-6
                py-3
                rounded-full
                border
                border-[#d4af37]/40
                bg-white/50
                text-[#8B1E2D]
                font-semibold
                text-xs
                sm:text-sm
                md:text-base
                wedding
                "
              >
                Sunday, 19 JULY 2026 | 01:37 PM
              </div>

            </div>

            {/* Couple Image */}
            <div className="flex justify-center mt-8 w-full">
              <Image
                src="/assets/wedding.png"
                alt="Wedding Couple"
                width={340}
                height={340}
                className="
                w-full
                max-w-[300px]
                sm:max-w-[340px]
                object-contain
                drop-shadow-xl
                rounded-2xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}