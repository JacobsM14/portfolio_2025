import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import i18nHtml from "./vite-plugins/i18nHtml.js";

export default defineConfig({
  plugins: [react(), tailwindcss(), i18nHtml()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)),
        es: fileURLToPath(new URL("es/index.html", import.meta.url)),
      },
    },
  },
});
