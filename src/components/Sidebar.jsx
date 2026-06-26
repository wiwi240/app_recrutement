import { useSelector } from 'react-redux';

export default function Sidebar() {
  const skills = useSelector((state) => state.skills.skills);

  return (
    <aside className="sidebar">
      <h2>Skills</h2>
      {skills.length > 0 ? (
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills provided yet.</p>
      )}
    </aside>
  );
}
