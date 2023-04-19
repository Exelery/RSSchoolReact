import React from 'react';
import { AboutPage } from '@/pages';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
describe('Renders about page correctly', async () => {
    it('Should render the AboutPage', async () => {
        render(React.createElement(BrowserRouter, null,
            React.createElement(AboutPage, null)));
        expect(screen.getByRole('heading')).toHaveTextContent('This is the about page');
    });
});
