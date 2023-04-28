import React, { Suspense } from 'react';
import SearchBar from '@/components/Main/SearchBar';
import '@/components/main/mainPage.scss';
import CardsList from '@/components/MainCardList/CardsList';

export function MainPage() {
  return (
    <div className="mainPage">
      <h1>This is the home page</h1>
      <SearchBar />
      <Suspense fallback={<p>fetching posts…</p>}>
        <CardsList />
      </Suspense>
    </div>
  );
}
