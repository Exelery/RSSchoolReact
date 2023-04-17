import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@/setupTests/testUtils';
import FormComponent from '@/components/Form';
import CardsList from '../components/FormCardList/CardsList';
import { formItems } from './mockData';

describe('check FormPage', async () => {
  it('should show error', async () => {
    renderWithProviders(<FormComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/Choose here/i)).toBeInTheDocument();
  });
});

describe('check CardList', async () => {
  it('should show initial text', async () => {
    renderWithProviders(<CardsList />);
    expect(await screen.findByText(/Add card/i)).toBeInTheDocument();
  });
  it('should show correct cards', async () => {
    renderWithProviders(<CardsList />, { preloadedState: { form: { items: formItems } } });

    expect(await screen.findByText(/29.93.2002/i)).toBeInTheDocument();
  });
});
