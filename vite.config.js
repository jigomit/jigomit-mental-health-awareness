import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'vue-vendor': ['vue', 'vue-router'],
          'gsap-vendor': ['gsap'],
        },
        // Asset file naming for better caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Generate source maps for debugging (optional in production)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
    // Reduce bundle size
    reportCompressedSize: true,
  },
  // Optimize deps for faster dev server
  optimizeDeps: {
    include: ['vue', 'vue-router', 'gsap'],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
    // Minify CSS in production
    postcss: {},
  },
  // Server optimization
  server: {
    hmr: true,
    preTransformRequests: true,
  },
  // Preview server (production)
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})
