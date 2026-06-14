// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ozodenta-demo.pages.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});