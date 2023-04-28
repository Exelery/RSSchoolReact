import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';
export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*'],
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      coverage(on, config);
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
