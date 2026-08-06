import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "192.168.0.51", // Add your local IP here
    "localhost", // Add localhost for local dev environments
    "127.0.0.1", // Add localhost IP
  ],
};

export default nextConfig;
