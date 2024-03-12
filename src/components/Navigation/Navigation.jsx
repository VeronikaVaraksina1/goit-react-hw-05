import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
          to="/movies"
        >
          Movies page
        </NavLink>
      </nav>
    </header>
  );
}
