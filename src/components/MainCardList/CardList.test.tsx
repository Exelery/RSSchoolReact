import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CardsList from './CardsList';
import React from 'react';
import { mockCharacters } from '../../setupTests/mock';

describe('Renders cards correctly', async () => {
  it('Should render the Cards', async () => {
    const { container } = render(<CardsList items={mockCharacters} loaderVisible={false} />);
    expect(container.getElementsByClassName('card').length).toEqual(2);
  });

  it('Should render the Loader', async () => {
    const { container } = render(<CardsList items={mockCharacters} loaderVisible={true} />);
    expect(container.getElementsByClassName('card').length).toEqual(0);
    expect(screen.getByRole('status')).toBeInTheDocument;
  });

  it('Should render the text if have no cards', async () => {
    render(<CardsList items={[]} loaderVisible={false} />);
    expect(screen.getByText(/No cards/i)).toBeInTheDocument();
  });
});

describe('Check correct modal windows', async () => {
  it('Should load correct modal', async () => {
    render(<CardsList items={mockCharacters} loaderVisible={false} />);
    const card = screen.getByText(/Morty/i);
    fireEvent.click(card);

    expect(screen.getByRole('status')).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
