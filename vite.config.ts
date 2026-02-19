import { defineConfig } from 'vite'

export default defineConfig({
  root: 'client',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'phaser', test: /node_modules[\\/]phaser/ },
            { name: 'libs', test: /node_modules/ },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1500, // phaser is a big library, so we need to increase the chunk size warning limit
  },
})
