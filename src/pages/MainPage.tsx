import React from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Header from '../components/Header';
import { data } from '../data';
import '../styles/mainPage.scss';

export default function MainPage() {
  return (
    <div className="mainPage">
      <Header title="MainPage" />
      <h1>This is the home page</h1>
      <SearchBar />
      <div className="cards">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
