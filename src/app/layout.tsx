import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "ESarangay",
  description: "Made with NextJS",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
        <div className="fixed bg-bg-gray min-h-full min-w-full z-[-1]" style={{ zoom: '2' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-h-screen w-full"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="9"
                numOctaves="4"
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
        <main className="h-screen">{children}</main>
      </body>
    </html>
  );
}
