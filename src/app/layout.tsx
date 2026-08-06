"use client";

// @ts-ignore
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [isBusinessCardPage, setIsBusinessCardPage] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setIsBusinessCardPage(pathName === "/");
  }, [pathName]);

  return (
    <html lang="en" className={urbanist.className}>
      <body className="relative">
        {!isBusinessCardPage && (
          <div className="fixed right-8 bottom-8 z-10 flex h-min w-max rounded-xl bg-[#fdfdfd] p-2 shadow-lg">
            <Navbar />
          </div>
        )}

        <div className="flex h-dvh w-full">{children}</div>

        <footer className="text-black">Footer</footer>
      </body>
    </html>
  );
}
