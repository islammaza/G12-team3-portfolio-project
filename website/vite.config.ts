import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// When deploying to GitHub Pages, set `REPO_NAME` to your repository name (no leading slash).
const REPO_NAME = process.env.REPO_NAME || "G12-team3-portfolio-project";

export default defineConfig(({ mode }) => ({
  // base will be used as the base path when building the project for production
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : `./`,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
