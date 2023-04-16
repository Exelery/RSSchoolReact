import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { changeSearchValue } from '../../store/searchSlice';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);

  function startSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget.elements.namedItem('search') as HTMLInputElement;
    dispatch(changeSearchValue({ value: target.value }));
    // fetchData(target.value);
    // saveToLocale();
  }

  return (
    <form className="search" onSubmit={startSearch}>
      <input
        ref={searchRef}
        name="search"
        type="text"
        className="searchTerm"
        key="searchBar"
        placeholder={'What are you looking for?'}
        defaultValue={useAppSelector((state) => state.search.value)}
      />
      <button type="submit" className="searchButton bg-sky-600 ">
        ✎
      </button>
    </form>
  );
}
