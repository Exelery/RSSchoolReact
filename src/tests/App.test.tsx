import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import Card from '../components/main/Card';
import { data } from '../data';
import { validFileType } from '../utils';
import CardsList from '../components/CardsList';
import { IItem } from '../utils/types';

describe('Renders main pages correctly', async () => {
  it('Should render the MainPage', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/This is the home page/i)).toBeInTheDocument();
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

describe('check FormPage', async () => {
  it('Should render form Page', async () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Create new post/i)).toBeInTheDocument();
  });
  it('should show error', async () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <App />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/Choose here/i)).toBeInTheDocument();
  });
});

describe('check newCards', async () => {
  it('Should render correct card', async () => {
    const item: IItem[] = [
      {
        id: 1,
        date: '29.93.2002',
        gender: 'man',
        title: 'test',
        rating: 'fruit',
        category: ['busines'],
        image: 'test',
      },
    ];
    render(<CardsList items={item} />);
    expect(screen.getByText(/man/i)).toBeInTheDocument();
  });
});
