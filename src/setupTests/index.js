import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from './mockServer';
expect.extend(matchers);
afterEach(() => {
    cleanup();
});
beforeAll(() => server.listen({
    onUnhandledRequest: ({ method, url }) => {
        if (!url.pathname.startsWith('/api')) {
            throw new Error(`Unhandled ${method} request to ${url}`);
        }
    },
}));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
