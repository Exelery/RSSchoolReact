import React from 'react';
import SearchBar from '@/components/Main/SearchBar';
import Header from '@/components/Header';
import '@/components/main/mainPage.scss';
import CardsList from '@/components/MainCardList/CardsList';
export function MainPage() {
    return (React.createElement("div", { className: "mainPage" },
        React.createElement(Header, { title: "MainPage" }),
        React.createElement("h1", null, "This is the home page"),
        React.createElement(SearchBar, null),
        React.createElement(CardsList, null)));
}
