"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate =
    new Date("2026-07-19T10:00:00");

  const [time, setTime] =
    useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff =
        weddingDate.getTime() -
        new Date().getTime();

      setTime({
        days: Math.floor(
          diff /
            (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (diff /
            (1000 * 60 * 60)) %
            24
        ),

        minutes: Math.floor(
          (diff / (1000 * 60)) %
            60
        ),

        seconds: Math.floor(
          (diff / 1000) % 60
        ),
      });
    }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <div
      className="
      flex
      justify-center
      gap-6
      mt-10
      flex-wrap
      "
    >
      {[
        ["Days", time.days],
        ["Hours", time.hours],
        ["Minutes", time.minutes],
        ["Seconds", time.seconds],
      ].map(([label, value]) => (
        <div
          key={label}
          className="
          w-28
          h-28
          rounded-[24px]
          border
          border-[#d4af37]
          bg-white/40
          backdrop-blur-md
          flex
          flex-col
          justify-center
          items-center
          "
        >
          <span
            className="
            text-5xl
            text-[#8B1E2D]
            "
          >
            {value}
          </span>

          <span
            className="
            mt-2
            text-[#7d8b5c]
            uppercase
            tracking-[3px]
            "
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}