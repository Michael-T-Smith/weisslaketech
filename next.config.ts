import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optional React Compiler workers cannot run in every CI/container environment.
  reactCompiler: false,
};

export default nextConfig;
