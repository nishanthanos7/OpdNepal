import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this app so a stray lockfile in a parent
  // directory cannot confuse module resolution or trigger the
  // "inferred workspace root" warning at build time.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Keep dev memory bounded on lower-RAM machines: drop inactive
  // compiled pages quickly and only hold a small page buffer in RAM.
  // Without this, every page you visit during a dev session stays
  // resident — which is the difference between a steady 1 GB and a
  // creeping 3 GB after an hour of clicking around.
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Production source maps are large and slow to emit. Keep them off
  // unless you genuinely need them in production debugging.
  productionBrowserSourceMaps: false,
};

export default nextConfig;
