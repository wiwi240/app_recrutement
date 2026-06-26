import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const fullName = useSelector((state) => state.user.fullName);
  const skillsCount = useSelector((state) => state.skills.skillsCount);

  return (
    <header className="site-header">
      <div className="brand-block">
        <div className="brand-mark">MM</div>
        <div>
          <p className="brand-title">Mini Malt</p>
          <p className="brand-subtitle">Exercice React + Redux</p>
        </div>
      </div>

      <nav className="main-nav" aria-label="Navigation principale">
        <NavLink to="/" className={({ isActive }) => navClassName(isActive)}>
          Accueil
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => navClassName(isActive)}
        >
          Profil
        </NavLink>
      </nav>

      <div className="user-summary">
        <strong>{fullName ?? 'inconnu'}</strong>
        <span>{skillsCount} compétence{skillsCount > 1 ? 's' : ''}</span>
      </div>
    </header>
  );
}

function navClassName(isActive) {
  return `nav-link${isActive ? ' nav-link-active' : ''}`;
}
