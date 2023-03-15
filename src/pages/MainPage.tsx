import React from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

export default function MainPage() {
  return (
    <div>
      <h1>This is the home page</h1>
      <SearchBar />
      <Card />
    </div>
  );
}
