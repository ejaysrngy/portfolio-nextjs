import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESarangay",
  description: "Made with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* create div for grainy background
            set to absolute cause this is technically
            a blocked element
        */}
        <div className="bg-bg-gray absolute min-h-full min-w-full">
          <svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="9"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        {/* set main div to relative
            to be rendered on top of 
            the grainy bg
        */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}