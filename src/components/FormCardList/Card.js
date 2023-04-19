import React from 'react';
export default function newCard({ item }) {
    return (React.createElement("div", { className: "bg-white border-2 border-blue-500 rounded-lg overflow-hidden flex flex-col w-80 h-80 flex-wrap relative" },
        React.createElement("div", { className: "px-4 py-4" },
            React.createElement("img", { src: item.image, className: item.image ? 'w-72 object-contain h-auto max-h-72' : '' }),
            React.createElement("div", { className: "font-bold text-lg mb-2" }, item.title),
            React.createElement("p", { className: "text-gray-700" }, item.gender),
            React.createElement("div", { className: "flex gap-2 justify-center" }, item.category.map((el, index) => (React.createElement("div", { className: "border-blue-500 bg-blue-500 text-white rounded-full px-3", key: index }, el)))),
            React.createElement("p", { className: "text-gray-700 text-base" }, item.rating),
            React.createElement("p", { className: "text-gray-700 absolute bottom-2 left-2" }, item.date))));
}
