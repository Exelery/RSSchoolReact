import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

// import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// environment: 'happy-dom',
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  // root: 'src',
  build: {
    minify: false,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests/index'],
    coverage: {
      enabled: true,
      provider: 'c8',
      include: ['src/**/*'],
      exclude: [
        '**/*.d.ts',
        '**/types.ts',
        'src/components/Layout.tsx',
        'src/main.tsx',
        'src/setupTests/*',
        'src/tests/*',
      ],
      all: true,
      reporter: ['text'],
    },
  },
});
