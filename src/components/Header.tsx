import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '@/styles/header.scss';
import { routerPaths } from '@/routes';

export default function Header() {
  const route = useLocation();
  const name = routerPaths.find((el) => el.path === route.pathname)?.name || ' ';

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

  return (
    <header className="header">
      <div className="name">{name}</div>
      <nav className="header__links">
        {routerPaths.map((el) => {
          if (el.path === '*') {
            return null;
          }
          return (
            <NavLink to={el.path} className={setActive} key={el.name}>
              {el.name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
