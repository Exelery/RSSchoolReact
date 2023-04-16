import React from 'react';
import SearchBar from '@/components/Main/SearchBar';
import Header from '@/components/Header';
import '@/components/main/mainPage.scss';
import CardsList from '@/components/MainCardList/CardsList';

export function MainPage() {
  return (
    <div className="mainPage">
      <Header title="MainPage" />
      <h1>This is the home page</h1>
      <SearchBar />
      <CardsList />
    </div>
  );
}
