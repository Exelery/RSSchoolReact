import React, { useEffect, useRef, useState } from 'react';
export default function SearchBar() {
  const [value, setValue] = useState(localStorage.getItem('search') || '');
  const valueRef = useRef(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const saveToLocale = () => {
    console.log('test2');
    localStorage.setItem('search', valueRef.current);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', saveToLocale);
    return () => {
      saveToLocale();
      window.removeEventListener('beforeunload', saveToLocale);
    };
  }, []);

  return (
    <div className="search">
      <input
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
    </div>
  );
}
