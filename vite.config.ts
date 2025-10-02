import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'pawsh-1.onrender.com',
      'www.pawshpetservices.com',
      'pawshpetservices.com',
      'localhost'
    ],
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    react({
      jsxImportSource: 'react',
      tsDecorators: true,
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
}));
