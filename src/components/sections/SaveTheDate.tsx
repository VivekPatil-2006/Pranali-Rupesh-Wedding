"use client";

import { useEffect, useRef, useState } from "react";

export default function SaveTheDate() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealedRef = useRef(false); // avoids stale closure issues in event handlers

  useEffect(() => {
    const weddingDate = new Date("2026-07-19T10:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Internal drawing resolution (kept fixed for crisp rendering)
    const width = 700;
    const height = 220;

    canvas.width = width;
    canvas.height = height;

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#dcb06c");
      gradient.addColorStop(1, "#bf8c44");

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#fff";
      ctx.font = "bold 34px serif";
      ctx.textAlign = "center";
      ctx.fillText("✦ SCRATCH TO REVEAL ✦", width / 2, height / 2 + 10);
    };

    draw();

    let drawing = false;

    // Converts a client (viewport) coordinate into canvas-internal pixel coordinates,
    // accounting for the difference between the canvas's CSS display size and its
    // internal drawing resolution (this is what was broken on mobile).
    const getPos = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    };

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();

      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparent = 0;

      for (let i = 3; i < pixels.data.length; i += 4) {
        if (pixels.data[i] === 0) {
          transparent++;
        }
      }

      const percent = transparent / (canvas.width * canvas.height);

      if (percent > 0.35 && !revealedRef.current) {
        revealedRef.current = true;
        setRevealed(true);
        setShowConfetti(true);

        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      }
    };

    // --- Mouse handlers ---
    const onMouseDown = (e: MouseEvent) => {
      drawing = true;
      const pos = getPos(e.clientX, e.clientY);
      scratch(pos.x, pos.y);
    };

    const onMouseUp = () => {
      drawing = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!drawing) return;
      const pos = getPos(e.clientX, e.clientY);
      scratch(pos.x, pos.y);
    };

    // --- Touch handlers ---
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault(); // stop the page from scrolling while scratching
      drawing = true;
      const touch = e.touches[0];
      if (!touch) return;
      const pos = getPos(touch.clientX, touch.clientY);
      scratch(pos.x, pos.y);
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      drawing = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!drawing) return;
      e.preventDefault(); // critical: prevents scroll-hijacking on mobile
      const touch = e.touches[0];
      if (!touch) return;
      const pos = getPos(touch.clientX, touch.clientY);
      scratch(pos.x, pos.y);
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    // passive: false is required so preventDefault() actually works on touch events
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });
    canvas.addEventListener("touchcancel", onTouchEnd, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);

      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchcancel", onTouchEnd);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
        color: "brown",
        padding: "70px 20px",
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-title tracking-[4px] text-[#8B1E2D]">
        To Reveal Date
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          minHeight: "220px",
          position: "relative",
        }}
      >
        {/* Hidden Content */}
        <div
          className="glass-card"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            className="font-title text-base sm:text-lg"
            style={{
              color: "#7d8b5c",
              letterSpacing: "6px",
              fontWeight: "bold",
            }}
          >
            SAVE THE DATE
          </p>

          <h3
            className="font-script text-4xl sm:text-5xl md:text-6xl"
            style={{
              color: "#8B1E2D",
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
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              zIndex: 10,
              cursor: "pointer",
              touchAction: "none", // prevents the browser from intercepting touch gestures for scrolling/zooming
            }}
          />
        )}
      </div>

      {/* Timer */}
      {revealed && (
        <>
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              ["DAYS", timeLeft.days],
              ["HOURS", timeLeft.hours],
              ["MINUTES", timeLeft.minutes],
              ["SECONDS", timeLeft.seconds],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="
                  w-[120px]
                  h-[120px]
                  sm:w-[140px]
                  sm:h-[140px]
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
            ))}
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
                {[...Array(150)].map((_, i) => (
                  <span
                    key={i}
                    className="confetti"
                    style={{
                      left: Math.random() * 100 + "%",
                      background: [
                        "#ff4d6d",
                        "#ffd60a",
                        "#06d6a0",
                        "#118ab2",
                        "#ef476f",
                        "#d4af37",
                      ][Math.floor(Math.random() * 6)],
                      animationDelay: Math.random() * 0.5 + "s",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
