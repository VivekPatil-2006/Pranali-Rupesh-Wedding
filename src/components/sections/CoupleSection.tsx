"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/g-welcome-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          glass-card
          rounded-[32px]
          p-10
          md:p-16
          text-center
        "
      >
        {/* Groom */}

        <h2
          className="
          font-script
          text-[#8B1E2D]
          text-[70px] 
          md:text-[110px]
          "
        >
          Rupesh
        </h2>

        <p className="mt-4 text-lg text-[#5C0F14]">
          S/o Mr. Rajendra Shinde & Mrs. Suvarna Shinde
        </p>

        <p className="italic text-[#7A5A5A] mt-2">
          Grandson of Mr. Sarjerav Shinde
        </p>

        {/* WEDS */}

        <div className="my-12">
          <p className="font-script text-4xl text-[#5C0F14]">
            weds
          </p>
        </div>

        {/* Bride */}

        <h2
          className="
          font-script
          text-[#8B1E2D]
          text-[70px] 
          md:text-[110px]
          "
        >
          Pranali
        </h2>

        <p className="mt-4 text-lg text-[#5C0F14]">
          D/o Mr. Jitendra Patil & Mrs. Vandana Patil
        </p>

        <p className="italic text-[#7A5A5A] mt-2">
          Granddaughter of Mr. Dhondiram Patil
        </p>

        {/* Shiva Parvati */}

        <div className="mt-16 flex justify-center">
          <Image
            src="/assets/g-shiva-parvati.png"
            alt="Shiva Parvati"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}