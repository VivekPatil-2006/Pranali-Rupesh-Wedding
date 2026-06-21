"use client";

export default function VenueSection() {
  return (
    <section className="py-24 px-4">

      <div className="max-w-6xl mx-auto text-center">

        <h2
          className="
          font-script
          text-[#8B1E2D]
          text-5xl
          md:text-7xl
          "
        ><br/>
          Awaiting Your Noble Presence
        </h2>

        <p className="mt-8 text-xl text-[#5C0F14]">
          Join us as we celebrate love,
          laughter and forever.
        </p>

        <br/><br/>
        <div
          className="
          glass-card
          rounded-[32px]
          mt-16
          overflow-hidden
          "
        >
          <iframe
            src="https://www.google.com/maps?q=Kautika+Palace+Khanapur+Sangli&output=embed"
            width="100%"
            height="450"
            loading="lazy"
          />
        </div><br/><br/>

        <a
  href="https://maps.app.goo.gl/RvSaVKvj7ak2yTER7?g_st=ic"
  target="_blank"
  rel="noopener noreferrer"
  className="
  inline-flex
  items-center
  gap-4
  mt-10
  px-12
  py-5
  rounded-full
  bg-[#C4873B]
  text-white
  font-title
  tracking-[2px]
  text-lg
  shadow-lg
  hover:scale-105
  hover:bg-[#b8792f]
  transition-all
  duration-300
  "
><br/><br/>
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
      <br/><br/>

    </section>
  );
}