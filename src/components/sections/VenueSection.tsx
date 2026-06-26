"use client";

export default function VenueSection() {
  return (
    <section className="py-24 px-4">

      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">

        <h2
          className="
          font-script
          text-[#8B1E2D]
          text-4xl
          sm:text-5xl
          md:text-7xl
          "
        >
          Awaiting Your Noble Presence
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#5C0F14] leading-relaxed">
          Please join us for a Sacred Celebration,
          <br />
          As two hearts, two families and
          <br />
          two journeys become one.
        </p>

        <div className="mt-10">
          <br/><br/>
          <h3 className="venue text-lg sm:text-xl md:text-2xl">
            Venue: Kautika Palace, Khanapur, Sangli
          </h3>
        </div>

        <div className="mx-auto w-full max-w-5xl mt-12 px-4 sm:px-6">
          <div
            className="
            glass-card
            rounded-[32px]
            overflow-hidden
            bg-white/10
            shadow-xl
            "
            style={{ minHeight: '260px' }}
          >
            <iframe
              src="https://www.google.com/maps?q=Kautika+Palace+Khanapur+Sangli&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
          <br/>
        </div>

        <a
          href="https://maps.app.goo.gl/RvSaVKvj7ak2yTER7?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex
          items-center
          justify-center
          gap-3
          mt-6
          px-6
          py-3
          rounded-full
          bg-[#C4873B]
          text-white
          font-title
          tracking-[1px]
          text-sm
          sm:text-base
          shadow-lg
          hover:scale-105
          hover:bg-[#b8792f]
          transition-all
          duration-300
          no-underline
          "
        >
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 2L11 13"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 2L15 22L11 13L2 9L22 2Z"
    />
  </svg>

  GET DIRECTIONS
</a>

      </div>
      <br/>

    </section>
  );
}

