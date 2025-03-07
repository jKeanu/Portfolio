import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    react()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Shorter import paths
    },
  },

  build: {
    target: 'esnext', // Optimize for modern browsers
    outDir: 'dist', 
    minify: 'esbuild', // Faster minification than Terser
    sourcemap: mode === 'development', // Enable sourcemaps only in dev for debugging
    chunkSizeWarningLimit: 500, // Warn if chunk is over 500kb
    //Rollup is a tool used to bundle JavaScript files. It takes multiple files (like your JavaScript, CSS, 
    //and other assets) and combines them into a smaller set of files, typically just one or two. 
    //This process is called bundling,  and it's used to make it easier and faster to load your code in the browser
    //Vite uses Rollup internally to bundle code during production builds.
    rollupOptions: {
      output: {
        manualChunks(id) {
          //By splitting your vendor libraries into a separate chunk, you reduce the 
          //size of your main bundle, allowing the browser to download a smaller file when initially loading your app.
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'; // Separate React
            if (id.includes('lodash')) return 'vendor-lodash'; // Separate lodash
            return 'vendor'; // Other dependencies
          }
        },
      },
    },
  },

  server: {
    strictPort: true, 
    open: true, 
    cors: true, // Allow cross-origin requests
  },

  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [], // Remove logs only in production
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode), // Helps with tree-shaking
    }
  },
  
}));