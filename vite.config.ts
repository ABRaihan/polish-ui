import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
