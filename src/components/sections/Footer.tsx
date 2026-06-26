"use client";

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      py-24
      px-4
      text-center
      "
      style={{
        background:
          "linear-gradient(180deg,#6b0010 0%,#5c000d 100%)",
      }}
    >
      <div className="relative z-10">
        <p
          className="
          uppercase
          tracking-[6px]
          text-[#d4af37]
          text-sm
          mb-4
          "
        >
          With Love
        </p>

        <h2
          className="
          font-script
          text-[#d4af37]
          text-4xl
          sm:text-5xl
          md:text-8xl
          leading-tight
          "
        >
          Pranali &amp; Rupesh
        </h2>

        <div className="text-4xl sm:text-5xl mt-8 mb-8">
          ❤️
        </div>

        <h3
          className="
          font-script
          text-[#f5e3b0]
          text-2xl
          sm:text-3xl
          md:text-4xl
          "
        >
          19th July 2026
        </h3>

        <p
          className="
          mt-5
          text-[#d4af37]
          tracking-[4px]
          uppercase
          text-sm
          "
        >
          #PraRupWedding
        </p>
      </div>
    </footer>
  );
}