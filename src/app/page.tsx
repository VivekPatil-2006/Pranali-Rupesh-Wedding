"use client";

import { useState } from "react";

import LandingHero from "../components/sections/LandingHero";
import MainInvitation from "../components/sections/MainInvitation";

import FloatingPetals from "../components/effects/FloatingPetals";
import FloatingDaisies from "../components/effects/FloatingDaisies";

import MusicPlayer from "../components/comman/MusicPlayer";
import Butterfly from "../components/effects/Butterfly";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <FloatingPetals />
      <FloatingDaisies />
      <MusicPlayer />
      <Butterfly />

      {!opened ? (
        <LandingHero onOpen={() => setOpened(true)} />
      ) : (
        <MainInvitation />
      )}
    </>
  );
}