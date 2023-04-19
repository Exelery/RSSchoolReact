import React from 'react';
import Header from '../components/Header';
export function AboutPage() {
    return (React.createElement("div", null,
        React.createElement(Header, { title: "AboutPage" }),
        React.createElement("h1", null, "This is the about page")));
}
