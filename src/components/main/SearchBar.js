import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { changeSearchValue } from '../../store/searchSlice';
export default function SearchBar() {
    const dispatch = useAppDispatch();
    const searchRef = useRef(null);
    function startSearch(e) {
        e.preventDefault();
        const target = e.currentTarget.elements.namedItem('search');
        dispatch(changeSearchValue({ value: target.value }));
        // fetchData(target.value);
        // saveToLocale();
    }
    return (React.createElement("form", { className: "search", onSubmit: startSearch },
        React.createElement("input", { ref: searchRef, name: "search", type: "text", className: "searchTerm", key: "searchBar", placeholder: 'What are you looking for?', defaultValue: useAppSelector((state) => state.search.value) }),
        React.createElement("button", { type: "submit", className: "searchButton bg-sky-600 " }, "\u270E")));
}
