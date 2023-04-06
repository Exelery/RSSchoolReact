import { defineConfig } from 'vitest/config';
// import { resolve } from 'path';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// environment: 'happy-dom',
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests',
    coverage: {
      enabled: true,
      provider: 'c8',
      include: ['src/**/*'],
      exclude: [
        'src/components/Layout.tsx',
        'src/vite-env.d.ts',
        'src/main.tsx',
        'src/utils/types.ts',
      ],
      all: true,
      reporter: ['text'],
    },
  },
});
