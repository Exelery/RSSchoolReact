import React, { useCallback, useState } from 'react';
import SearchBar from '@/components/Main/SearchBar';
import Header from '@/components/Header';
import '@/components/main/mainPage.scss';
import { getCharacters } from '@/api/api';
import { ICharacter } from '@/api/types';
import CardsList from '@/components/MainCardList/CardsList';

export function MainPage() {
  // const [apiResult, setApiResult] = useState<ICharacter[]>([]);
  // const [loaderVisible, setloaderVisible] = useState(false);

  // const fetchData = useCallback(async (value = '') => {
  //   setloaderVisible(true);
  //   setApiResult(await getCharacters(value));
  //   setloaderVisible(false);
  // }, []);

  return (
    <div className="mainPage">
      <Header title="MainPage" />
      <h1>This is the home page</h1>
      <SearchBar />
      <CardsList />
    </div>
  );
}
