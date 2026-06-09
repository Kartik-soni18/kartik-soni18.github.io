import fs from "fs"
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'plugin-inspect-react-code'

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "package.json"), "utf-8")
) as { homepage?: string }

const homepagePath = packageJson.homepage
  ? new URL(packageJson.homepage).pathname.replace(/\/?$/, "/")
  : "/"

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? homepagePath : "/",
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
