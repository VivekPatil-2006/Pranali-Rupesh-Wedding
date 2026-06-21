"use client";

import { useEffect, useRef, useState } from "react";


export default function SaveTheDate() {
  const [revealed, setRevealed] = useState(false);

  const [showConfetti, setShowConfetti] =
  useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const weddingDate = new Date(
      "2026-07-19T10:00:00"
    );

    const timer = setInterval(() => {
      const now = new Date();

      const diff =
        weddingDate.getTime() -
        now.getTime();

      if (diff <= 0) return;

      setTimeLeft({
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

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const width = 700;
    const height = 180;

    canvas.width = width;
    canvas.height = height;

    const gradient =
      ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

    gradient.addColorStop(
      0,
      "#dcb06c"
    );

    gradient.addColorStop(
      1,
      "#bf8c44"
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(
      0,
      0,
      width,
      height
    );

    ctx.fillStyle = "#fff";

    ctx.font =
      "bold 34px serif";

    ctx.textAlign = "center";

    ctx.fillText(
      "✦ SCRATCH TO REVEAL ✦",
      width / 2,
      height / 2 + 10
    );

    let drawing = false;

    const scratch = (
      x: number,
      y: number
    ) => {
      ctx.globalCompositeOperation =
        "destination-out";

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        45,
        0,
        Math.PI * 2
      );

      ctx.fill();

      const pixels =
        ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );

      let transparent = 0;

      for (
        let i = 3;
        i < pixels.data.length;
        i += 4
      ) {
        if (
          pixels.data[i] === 0
        ) {
          transparent++;
        }
      }

      const percent =
        transparent /
        (canvas.width *
          canvas.height);

      if (
  percent > 0.35 &&
  !revealed
) {
  setRevealed(true);

  setShowConfetti(true);

  setTimeout(() => {
    setShowConfetti(false);
  }, 5000);
}
    };

    const getPos = (
      e: MouseEvent | TouchEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      if ("touches" in e) {
        return {
          x:
            e.touches[0]
              .clientX -
            rect.left,

          y:
            e.touches[0]
              .clientY -
            rect.top,
        };
      }

      return {
        x:
          e.clientX -
          rect.left,

        y:
          e.clientY -
          rect.top,
      };
    };

    const start = () => {
      drawing = true;
    };

    const stop = () => {
      drawing = false;
    };

    const move = (
      e: MouseEvent | TouchEvent
    ) => {
      if (!drawing) return;

      const pos = getPos(e);

      scratch(
        pos.x,
        pos.y
      );
    };

    canvas.addEventListener(
      "mousedown",
      start
    );

    canvas.addEventListener(
      "mouseup",
      stop
    );

    canvas.addEventListener(
      "mousemove",
      move
    );

    canvas.addEventListener(
      "touchstart",
      start
    );

    canvas.addEventListener(
      "touchend",
      stop
    );

    canvas.addEventListener(
      "touchmove",
      move
    );

    return () => {
      canvas.removeEventListener(
        "mousedown",
        start
      );

      canvas.removeEventListener(
        "mouseup",
        stop
      );

      canvas.removeEventListener(
        "mousemove",
        move
      );

      canvas.removeEventListener(
        "touchstart",
        start
      );

      canvas.removeEventListener(
        "touchend",
        stop
      );

      canvas.removeEventListener(
        "touchmove",
        move
      );
    };
  }, [revealed]);

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding:
          "120px 20px",
      }}
    >
      <div
        style={{
          width: "700px",
          maxWidth: "90vw",
          height: "220px",
          position:
            "relative",
        }}
      >
        {/* Hidden Content */}

        <div
          className="glass-card"
          style={{
            position:
              "absolute",

            inset: 0,

            borderRadius:
              "30px",

            display: "flex",

            flexDirection:
              "column",

            justifyContent:
              "center",

            alignItems:
              "center",
          }}
        >
          <p
            className="font-title"
            style={{
              color:
                "#7d8b5c",

              letterSpacing:
                "6px",

              fontSize:
                "24px",
            }}
          >
            SAVE THE DATE
          </p>

          <h3
            className="font-script"
            style={{
              color:
                "#8B1E2D",

              fontSize:
                "72px",
            }}
          >
            19th July 2026
          </h3>
        </div>

        {/* Scratch Layer */}

        {!revealed && (
          <canvas
            ref={canvasRef}
            style={{
              position:
                "absolute",

              inset: 0,

              width: "100%",

              height:
                "100%",

              borderRadius:
                "30px",

              zIndex: 10,

              cursor:
                "pointer",
            }}
          />
        )}
      </div>

      {/* Timer */}

      {revealed && (
        <>
          <div
  className="
  flex
  flex-wrap
  justify-center

  gap-8

  mt-16
  "
>
            {[
              [
                "DAYS",
                timeLeft.days,
              ],

              [
                "HOURS",
                timeLeft.hours,
              ],

              [
                "MINUTES",
                timeLeft.minutes,
              ],

              [
                "SECONDS",
                timeLeft.seconds,
              ],
            ].map(
              (
                [
                  label,
                  value,
                ],
                i
              ) => (
                <div
  className="
  w-[140px]
  h-[140px]
  md:w-[170px]
  md:h-[170px]

  rounded-[28px]

  bg-white/35
  backdrop-blur-md

  border
  border-[#d4af37]

  flex
  flex-col
  items-center
  justify-center

  shadow-lg
  "
>
  <span
  className="
  mt-6

  text-[#7f9162]

  tracking-[6px]

  text-2xl

  font-title
  "
>
    {String(value).padStart(2, "0")}
  </span>

  <span
    className="
    mt-5

    text-[#7d8b5c]

    tracking-[4px]

    text-xl

    font-title
    "
  >
    {label}
  </span>
</div>
              )
            )}
          </div>

          {/* Confetti */}

          {showConfetti && (
  <>
    <div
      className="
      fixed
      top-20
      left-1/2
      -translate-x-1/2
      text-8xl
      z-[1000]
      animate-bounce
      "
    >
      🎉
    </div>

    <div
      className="
      fixed
      inset-0
      pointer-events-none
      z-[999]
      "
    >
      {[...Array(150)].map(
        (_, i) => (
          <span
            key={i}
            className="confetti"
            style={{
              left:
                Math.random() *
                  100 +
                "%",

              background:
                [
                  "#ff4d6d",
                  "#ffd60a",
                  "#06d6a0",
                  "#118ab2",
                  "#ef476f",
                  "#d4af37",
                ][
                  Math.floor(
                    Math.random() *
                      6
                  )
                ],

              animationDelay:
                Math.random() *
                  0.5 +
                "s",
            }}
          />
        )
      )}
    </div>
  </>
)}
        </>
      )}
    </section>
  );
}