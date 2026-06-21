"use client";

import Image from "next/image";

export default function WeddingCeremony() {
  return (
    <section className="px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* ========== HALDI CARD ========== */}
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

              {/* Hashtag */}
              <p
                className="
                mt-5
                text-[#c06d22]
                italic
                text-xl
                tracking-wide
                "
              >
                #PraRupWedding
              </p>

              {/* Sub Title */}
              <p
                className="
                mt-4
                tracking-[4px]
                uppercase
                text-[#b87333]
                text-sm
                md:text-base
                "
              >
                Please Join Us For A Morning
              </p>

              <p
                className="
                mt-2
                italic
                text-[#8c6b5d]
                text-base
                md:text-lg
                "
              >
                Filled with love, laughter and turmeric.
              </p>

              {/* Main Title */}
              <h2
                className="
                font-title
                text-[#b45b14]
                text-4xl
                md:text-5xl
                mt-8
                tracking-[4px]
                "
              >
                HALDI CEREMONY
              </h2>

              {/* Date */}
              <div
                className="
                inline-block
                mt-8
                px-8
                py-3
                rounded-full
                border
                border-[#d8b26f]
                bg-white/50
                text-[#a85c1f]
                font-semibold
                tracking-[3px]
                text-sm
                md:text-base
                "
              >
                19 JULY 2026 | 10:00 AM
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
                w-[280px]
                md:w-[340px]
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

              {/* Hashtag */}
              <p
                className="
                mt-5
                text-[#8B1E2D]
                italic
                text-xl
                tracking-wide
                "
              >
                #PraRupWedding
              </p>

              {/* Subtitle */}
              <p
                className="
                mt-4
                tracking-[4px]
                uppercase
                text-[#8B1E2D]
                text-sm
                md:text-base
                "
              >
                Please Join Us For A Sacred Celebration
              </p>

              <p
                className="
                mt-2
                italic
                text-[#7c5757]
                text-base
                md:text-lg
                "
              >
                As two hearts, two families and two journeys become one.
              </p>

              {/* Main Title */}
              <h2
                className="
                font-title
                text-[#8B1E2D]
                text-4xl
                md:text-5xl
                mt-8
                tracking-[4px]
                "
              >
                WEDDING CEREMONY
              </h2>

              {/* Date */}
              <div
                className="
                inline-block
                mt-8
                px-8
                py-3
                rounded-full
                border
                border-[#d4af37]/40
                bg-white/50
                text-[#8B1E2D]
                font-semibold
                tracking-[3px]
                text-sm
                md:text-base
                "
              >
                20 JULY 2026 | 06:00 PM
              </div>

              {/* Schedule */}
              <div
                className="
                mt-8
                max-w-xs
                mx-auto
                rounded-[24px]
                bg-white/50
                backdrop-blur-sm
                px-5
                py-4
                text-[#6b3f3f]
                text-sm
                border-white/30
                "
              >
                <span className="block font-medium tracking-wide">
                  ✨ Sapthapadi: 7 sacred vows
                </span>
                <span className="block text-xs italic mt-1">
                  03:48 PM · floral mandap
                </span>
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
                w-[280px]
                md:w-[340px]
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