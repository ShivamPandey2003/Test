import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "confident-res-ata-responses.trycloudflare.com", // <-- allow this Cloudflare tunnel host
    ],
  },
  plugins: [react()],
});
