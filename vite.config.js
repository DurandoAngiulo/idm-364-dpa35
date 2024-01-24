import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "static/dist/images")

      // Add more aliases as needed
    }
  }
});
