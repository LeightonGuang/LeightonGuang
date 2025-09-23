"use client";

import "./globals.css";
import localFont from "next/font/local";

const urbanist = localFont({
  src: [
    {
      path: "../assets/fonts/Urbanist-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Urbanist-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <div className="flex h-dvh w-full">{children}</div>
      </body>
    </html>
  );
}
