import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@/setupTests/testUtils';
import FormComponent from '../components/Form/FormComponent';

describe('check FormPage', async () => {
  it('should show error', async () => {
    renderWithProviders(<FormComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/Choose here/i)).toBeInTheDocument();
  });
});
