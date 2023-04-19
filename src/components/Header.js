import React from 'react';
import { NavLink } from 'react-router-dom';
import '@/styles/header.scss';
import routes from '@/routes';
export default function Header(props) {
    const setActive = ({ isActive }) => (isActive ? 'active-link' : '');
    return (React.createElement("header", { className: "header" },
        React.createElement("div", { className: "name" },
            props.title,
            " "),
        React.createElement("nav", { className: "header__links" }, routes.map((el) => {
            if (el.path === '*') {
                return null;
            }
            return (React.createElement(NavLink, { to: el.path, className: setActive, key: el.name }, el.name));
        }))));
}
