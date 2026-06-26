import { useSelector } from 'react-redux';

export default function Sidebar() {
  const skills = useSelector((state) => state.skills.skills);

  return (
    <aside className="sidebar">
      <h2>Compétences</h2>
      {skills.length > 0 ? (
        <ul className="sidebar-skills-list">
          {skills.map((skill) => (
            <li key={skill} className="sidebar-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune compétence renseignée.</p>
      )}
    </aside>
  );
}
