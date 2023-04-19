import React from 'react';
import Card from './Card';
import { useAppSelector } from '../../store/hook';
export default function CardsList() {
    const items = useAppSelector((state) => state.form.items);
    if (items.length === 0) {
        return (React.createElement("div", { className: "flex justify-center items-center grow" },
            React.createElement("h3", { className: " text-4xl" }, "Add card")));
    }
    return (React.createElement("div", { className: "card-list flex flex-wrap gap-5 my-4 col-span-4" }, items.map((item) => (React.createElement(Card, { item: item, key: item.id })))));
}
