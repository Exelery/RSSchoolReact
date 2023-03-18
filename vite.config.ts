import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// environment: 'happy-dom',
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests',
    coverage: {
      enabled: true,
      provider: 'c8',
      include: ['src/**/*'],
      exclude: ['src/components/Layout.tsx', 'src/vite-env.d.ts'],
      all: true,
      // lines: 80,
      // functions: 80,
      // branches: 80,
      // statements: 80,
      reporter: ['text'],
    },
  },
});

// coverage: {
//   enabled: true,
//   provider: 'c8',
//   reporter: ['text'],
//   all: true,
//  include: ['src//'],
//  exclude: ['src/.{ts,tsx}'],
// },
