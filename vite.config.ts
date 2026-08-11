import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/maker-school/" : "/",
  build: {
    sourcemap: true,
    target: "es2022",
  },
}));
