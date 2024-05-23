import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'scratch-ext', // Replace it with your extension name
  entry: ['src/index.ts', 'src/index.js'],
  target: ['esnext'],
  format: ['iife'],
  outDir: 'dist',
  banner: {
    // Replace it with your extension's metadata
    js: `// Name: DeltaScript
// ID: deltascript
// Description: A Text Programming Language For Scratch
// By: Aness6040
// License: MPL-2.0
`
  },
  platform: 'browser',
  clean: true
})
