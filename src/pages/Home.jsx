import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const fullName = useSelector((state) => state.user.fullName);
  const skills = useSelector((state) => state.skills.skills);

  return (
    <section className="home-card">
      <h1>Bienvenue{fullName ? ` ${fullName} !` : ' !'}</h1>

      {skills.length > 0 ? (
        <div className="home-skills-section">
          <h2>Vos compétences</h2>
          <ul className="home-skills-list">
            {skills.map((skill) => (
              <li key={skill} className="home-skill-item">
                <span className="skill-icon" aria-hidden="true">
                  🚀
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
          <NavLink to="/profile" className="home-profile-link">
            Modifier mes compétences
          </NavLink>
        </div>
      ) : (
        <div className="home-skills-section">
          <h2>Vos compétences</h2>
          <p>Aucune compétence pour le moment.</p>
          <NavLink to="/profile" className="home-profile-link">
            Modifier mes compétences
          </NavLink>
        </div>
      )}
    </section>
  );
}
