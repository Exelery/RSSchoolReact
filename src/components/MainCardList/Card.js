import React from 'react';
import '@/styles/card.scss';
export default function Card({ item, onClick }) {
    return (React.createElement("div", { className: "card hover:bg-sky-600 transition-all", onClick: onClick, role: "card" },
        React.createElement("div", { className: "position-relative" },
            React.createElement("div", { className: "card__overlay", style: { backgroundImage: `url(${item.image})` } })),
        React.createElement("div", { className: "m-3" },
            React.createElement("div", { className: "badge " }, item.name),
            React.createElement("h5", { className: "card-title" }, item.status),
            React.createElement("h6", { className: "card-subtitle" },
                item.gender,
                " $"),
            React.createElement("p", { className: "card-text" }, item.species))));
}
