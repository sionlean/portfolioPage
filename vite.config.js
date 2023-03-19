import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = {
  plugins: [react()],
  root: "src/Main/",
  build: {
    outDir: "../../dist", // Specify your output build folder here
    emptyOutDir: true,
  },
  jsx: { inject: true },
};

export default defineConfig(config);
