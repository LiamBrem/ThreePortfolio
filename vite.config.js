import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // If you are using Three.js as a module (recommended for better code organization)
      'three': 'three/build/three.module.js',

      // If you are using Three.js directly in your HTML file
      // 'three': 'three' 

      // Add any other aliases or custom paths here
    },
  },
  // If you need to load assets such as textures, models, or fonts
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.mp3', '**/*.ogg'],
  // Additional build settings, such as minification, source maps, etc.
  build: {
    // Set to 'esbuild' for faster build times, or 'rollup' for more compatibility
    // For Three.js apps, 'esbuild' is generally a good choice
    target: 'esnext',
    // Enable minification for production builds
    minify: true,
    // Enable source maps for easier debugging
    sourcemap: true,
    // Output directory for production builds
    outDir: 'dist',
    // Adjust this if you are deploying to a subdirectory (e.g., '/my-subdirectory/')
    // publicPath: '/',
  },
});
