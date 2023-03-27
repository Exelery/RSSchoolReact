import React from 'react';
import { NavLink } from 'react-router-dom';
import '@/styles/header.scss';
import routes from '@/routes';

export default function Header(props: { title: string }) {
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');
  return (
    <header className="header">
      <div className="name">{props.title} </div>
      <nav className="header__links">
        {routes.map((el) => {
          if (el.path === '*') {
            return <></>;
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
