"use client";

import Image from "next/image";

export default function WeddingCeremony() {
  return (
    <section className="px-4 py-16 sm:py-20 mt-16 sm:mt-20">
      <div
        className="
        relative
        max-w-6xl
        mx-auto
        border
        border-[#d4af37]
        overflow-hidden
        rounded-[32px]
        "
      >
        {/* Background */}

        <Image
          src="/assets/g-wedding-bg.png"
          alt="Wedding Background"
          fill
          priority
          className="object-cover"
        />

        {/* Content */}

        <div className="relative z-10 p-6 sm:p-8 md:p-12">

          {/* Glass Card */}

          <div
            className="
            mx-auto
            mt-12
            w-full
            max-w-[92%]
            rounded-[32px]
            bg-white/45
            backdrop-blur-md
            shadow-2xl
            text-center
            px-6
            py-10
            sm:px-8
            sm:py-12
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
                "
              >
              </div>
            </div>

            {/* Hashtag */}

            <p
              className="
              mt-6
              text-[#8B1E2D]
              italic
              text-xl
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
              "
            >
              Please Join Us For A Sacred Celebration
            </p>

            <p
              className="
              mt-3
              italic
              text-[#7c5757]
              text-lg
              "
            >
              As two hearts, two families and two journeys
              become one.
            </p>

            {/* Main Title */}

            <h2
              className="
              font-title
              text-[#8B1E2D]
              text-3xl
              sm:text-4xl
              md:text-6xl
              mt-10
              tracking-[4px]
              leading-tight
              "
            >
              WEDDING CEREMONY
            </h2>

            {/* Date */}

            <div
              className="
              inline-block
              mt-8
              px-10
              py-4
              rounded-full
              bg-white/50
              text-[#8B1E2D]
              font-semibold
              tracking-[3px]
              "
            >
              20 JULY 2026 | 06:00 PM
            </div>

            {/* Schedule */}

            <div
              className="
              mt-10
              max-w-md
              mx-auto
              rounded-[24px]
              bg-white/50
              backdrop-blur-md
              px-8
              py-6
              "
            >
              
            </div>
          </div>

          {/* Couple Image */}

          <div
            className="
            flex
            justify-center
            mt-10
            "
          >
            <Image
              src="/assets/wedding.png"
              alt="Wedding Couple"
              width={450}
              height={450}
              className="
                w-full
                max-w-[320px]
                sm:max-w-[450px]
                object-contain
                drop-shadow-xl
                rounded-2xl
                "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

