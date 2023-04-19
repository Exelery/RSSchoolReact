import React from 'react';
import { describe, it } from 'vitest';
import { renderWithProviders } from '@/setupTests/testUtils';
import { fireEvent, screen } from '@testing-library/react';
import CardsList from '@/components/MainCardList/CardsList';
describe('Renders cards correctly', async () => {
    it('Should show the loader', async () => {
        const { container } = renderWithProviders(React.createElement(CardsList, null));
        const svgEl = container.querySelector('.loader');
        expect(svgEl).toBeInTheDocument();
    });
    it('Should render cards', async () => {
        renderWithProviders(React.createElement(CardsList, null));
        const card = await screen.findByText(/Morty/i);
        expect(card).toBeInTheDocument();
        expect(await screen.findAllByRole('card')).toHaveLength(2);
    });
    it('Should render the text if have no cards', async () => {
        renderWithProviders(React.createElement(CardsList, null), { preloadedState: { search: { value: 'test' } } });
        expect(await screen.findByText(/No cards/i)).toBeInTheDocument();
    });
    it('Should render only one card', async () => {
        renderWithProviders(React.createElement(CardsList, null), { preloadedState: { search: { value: 'Morty' } } });
        const card = await screen.findByText(/Morty/i);
        expect(card).toBeInTheDocument();
        expect(await screen.findAllByRole('card')).toHaveLength(1);
    });
});
describe('Check correct modal windows', async () => {
    it('Should load correct modal', async () => {
        renderWithProviders(React.createElement(CardsList, null), { preloadedState: { search: { value: 'Morty' } } });
        const card = await screen.findByText(/Morty/i);
        fireEvent.click(card);
        expect(await screen.findByRole('heading', {
            name: /morty smith/i,
        })).toBeInTheDocument();
    });
});
