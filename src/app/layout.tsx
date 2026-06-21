import type { Metadata } from "next";
import {
  Great_Vibes,
  Cinzel,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Pranali ❤️ Rupesh",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${greatVibes.variable}
        ${cinzel.variable}
        ${cormorant.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}