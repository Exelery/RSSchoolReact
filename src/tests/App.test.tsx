import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import Card from '../components/Card';
import { data } from '../data';
import { validFileType } from '../utils';

describe('Renders main pages correctly', async () => {
  it('Should render the MainPage', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/MainPage/i)).toBeInTheDocument();
  });
  it('Should render the AboutPage', async () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('This is the about page');
  });
});

describe('Cards', async () => {
  it('Should check the card is exist', async () => {
    render(<Card item={data[0]} key={data[0].id} />);
    expect(screen.getByText(/iPhone 9/i)).toBeInTheDocument();
  });
});

describe('Check Routing', async () => {
  it('Should check the 404 page  exist', async () => {
    render(
      <MemoryRouter initialEntries={['/users/2']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/This is the error page/i)).toBeInTheDocument();
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
