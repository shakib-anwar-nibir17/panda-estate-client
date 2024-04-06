import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: [
          "http://localhost:3000",
          "https://panda-estate-server.vercel.app",
        ],
        secure: false,
      },
    },
  },
  plugins: [react()],
});
