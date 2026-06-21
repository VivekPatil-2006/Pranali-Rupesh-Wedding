"use client";

import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/assets/audio/background.mp3"
      />

      <button
        onClick={toggleAudio}
        className="
        fixed
        bottom-6
        right-6
        z-[999]
        w-14
        h-14
        rounded-full
        bg-[#5C0F14]
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        "
      >
        {playing ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
}