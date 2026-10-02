import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
        'next/link': path.resolve(import.meta.dirname, 'src/shims/next/link.tsx'),
        'next/image': path.resolve(import.meta.dirname, 'src/shims/next/image.tsx'),
        'next/navigation': path.resolve(import.meta.dirname, 'src/shims/next/navigation.tsx'),
        'next/font/google': path.resolve(import.meta.dirname, 'src/shims/next/font-google.tsx'),
        'next': path.resolve(import.meta.dirname, 'src/shims/next/index.ts'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
