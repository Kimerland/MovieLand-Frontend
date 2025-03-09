import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://movieland-backend.up.railway.app/",
    },
  },
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
