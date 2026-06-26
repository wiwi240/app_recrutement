import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import UserName from './UserName';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
        <nav className="navigation">
          <NavLink to="/" className={({ isActive }) => navClassName(isActive)}>
            Accueil
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => navClassName(isActive)}
          >
            Mon profil
          </NavLink>
        </nav>
      </div>
      <UserName />
    </header>
  );
}

function navClassName(isActive) {
  return isActive ? 'nav-link active' : 'nav-link';
}
