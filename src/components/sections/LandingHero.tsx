"use client";

import Image from "next/image";

interface Props {
  onOpen: () => void;
}

export default function LandingHero({
  onOpen,
}: Props) {
  const handleOpen = () => {
    const envelope =
      document.getElementById("envelope");

    envelope?.classList.add("open");

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
    transform: "translateX(-50%)",
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
        "
      >
        <div
  id="envelope"
  style={{
    marginTop: "80px",
  }}
  onClick={handleOpen}
></div>
        <Image
          src="/assets/envelope.png"
          alt="Wedding Invitation Envelope"
          width={420}
          height={420}
          priority
          className="
          w-[260px]
          md:w-[420px]
          h-auto
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
        md:text-5xl
        tracking-[8px]
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
        md:text-lg
        "
      >
        Tap the envelope to open our invitation
      </p>
    </section>
  );
}