import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss';

export default function Header(props: { title: string }) {
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');
  return (
    <header className="header">
      <div className="name">{props.title} </div>
      <div className="header__links">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
      </div>
    </header>
  );
}
