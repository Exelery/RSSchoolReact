import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';
import React from 'react';
import { validFileType } from '@/utils';
import { renderWithProviders } from '../setupTests/testUtils';
describe('Check Routing', async () => {
    it('Should render the 404 page', async () => {
        renderWithProviders(React.createElement(MemoryRouter, { initialEntries: ['/users/2'] },
            React.createElement(App, null)));
        expect(screen.getByText(/This is the error page/i)).toBeInTheDocument();
    });
    it('Should render formPage', async () => {
        renderWithProviders(React.createElement(MemoryRouter, { initialEntries: ['/forms'] },
            React.createElement(App, null)));
        expect(screen.getByText(/Create new post/i)).toBeInTheDocument();
    });
    it('Should render the AboutPage', async () => {
        renderWithProviders(React.createElement(MemoryRouter, { initialEntries: ['/about'] },
            React.createElement(App, null)));
        expect(screen.getByRole('heading')).toHaveTextContent('This is the about page');
    });
    it('Should render the MainPage with routing', async () => {
        renderWithProviders(React.createElement(MemoryRouter, { initialEntries: ['/'] },
            React.createElement(App, null)));
        expect(screen.getByRole('heading')).toHaveTextContent('This is the home page');
    });
});
describe('check utils', async () => {
    it('Should validate type and return false', async () => {
        const fileTxt = new File(['foo'], 'foo.txt', {
            type: 'text/plain',
        });
        expect(validFileType(fileTxt)).toBe(false);
    });
    it('Should validate type and return true', async () => {
        const fileImg = new File(['foo'], 'foo.txt', {
            type: 'image/jpeg',
        });
        expect(validFileType(fileImg)).toBe(true);
    });
});
