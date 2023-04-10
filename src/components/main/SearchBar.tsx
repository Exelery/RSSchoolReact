import React, { useEffect, useState } from 'react';

export default function SearchBar({ fetchData }: { fetchData: (value?: string) => void }) {
  const [value, setValue] = useState(localStorage.getItem('search') || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const saveToLocale = () => {
    localStorage.setItem('search', value);
  };

  useEffect(() => {
    fetchData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('search') as HTMLInputElement;
    fetchData(input.value);
    saveToLocale();
  }

  return (
    <form className="search" onSubmit={startSearch}>
      <input
        name="search"
        type="text"
        className="searchTerm"
        key="searchBar"
        value={value}
        placeholder={'What are you looking for?'}
        onChange={handleChange}
      />
      <button type="submit" className="searchButton bg-sky-600 ">
        ✎
      </button>
    </form>
  );
}
