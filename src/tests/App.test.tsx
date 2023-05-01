import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { validFileType } from '@/utils';
import { renderWithProviders } from '../setupTests/testUtils';
import { ErrorPage, FormsPage, AboutPage, MainPage } from '../pages';
import App from '../App';

describe('Check Routing', async () => {
  it('Should render the 404 page', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/users/2']}>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/This is the error page/i)).toBeInTheDocument();
  });
  it('Should render formPage', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/forms']}>
        <FormsPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Create new post/i)).toBeInTheDocument();
  });
  it('Should render the AboutPage', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/about']}>
        <AboutPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('This is the about page');
  });
  it('Should render the MainPage with routing', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <MainPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('This is the home page');
  });
  it('Should render formPage', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/forms']}>
        <FormsPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Create new post/i)).toBeInTheDocument();
  });
  it('Should render header', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/AboutPage/i)).toBeInTheDocument();
    expect(screen.getByText(/FormsPage/i)).toBeInTheDocument();
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
