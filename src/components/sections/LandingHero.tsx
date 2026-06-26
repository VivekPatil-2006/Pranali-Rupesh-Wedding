"use client";

import Image from "next/image";

interface Props {
  onOpen: () => void;
}

export default function LandingHero({
  onOpen,
}: Props) {

  const handleOpen = () => {

    // Start Music
    const audio =
      document.querySelector(
        "audio"
      ) as HTMLAudioElement | null;

    if (audio) {
      audio.play().catch(() => {});
    }

    // Envelope Animation
    const envelope =
      document.getElementById(
        "envelope"
      );

    envelope?.classList.add(
      "open"
    );

    // Open Invitation
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-4
      "
      style={{
        backgroundImage:
          "url('/assets/landing-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Ganesh Idol */}

      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform:
            "translateX(-50%)",
          zIndex: 999,
        }}
      >
        <Image
          src="/assets/ganesh-idol.png"
          alt="Ganesh"
          width={120}
          height={120}
          priority
        />
      </div>

      {/* Envelope */}

      <div
        id="envelope"
        onClick={handleOpen}
        className="
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-105
        mt-16
        w-full
        max-w-[90vw]
        sm:max-w-[420px]
        mx-auto
        "
      >
        <Image
          src="/assets/envelope.png"
          alt="Wedding Invitation Envelope"
          width={420}
          height={420}
          priority
          className="
          w-full
          h-auto
          max-w-[420px]
          "
        />
      </div>

      {/* Title */}

      <h1
        className="
        mt-6
        font-title
        text-[#7b1c2a]
        text-3xl
        sm:text-4xl
        md:text-5xl
        tracking-[6px]
        sm:tracking-[8px]
        leading-tight
        "
      >
        YOU&apos;RE INVITED
      </h1>

      {/* Subtitle */}

      <p
        className="
        mt-3
        text-[#7b1c2a]
        italic
        text-sm
        sm:text-base
        md:text-lg
        max-w-[90%]
        mx-auto
        leading-relaxed
        bold
        "
      >
        Tap the envelope to open our invitation
      </p>
    </section>
  );
}
