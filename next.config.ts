import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   devIndicators: false,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
         },
         {
            protocol: "https",
            hostname: "graph.facebook.com",
         },
      ],
   },
};

export default nextConfig;
