// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://dantukai.gkopcovs.workers.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});