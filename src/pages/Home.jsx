import { useSelector } from 'react-redux';

export default function Home() {
  const fullName = useSelector((state) => state.user.fullName);
  const skills = useSelector((state) => state.skills.skills);

  return (
    <section className="panel">
      <h1>Bienvenue{fullName ? ` ${fullName} !` : ' !'}</h1>
      <p className="lead">
        Cette application permet de centraliser un profil candidat simple avec
        Redux.
      </p>

      {skills.length > 0 ? (
        <>
          <h2>Compétences actuelles</h2>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="empty-state">
          Aucune compétence enregistrée. Va sur la page profil pour les
          renseigner.
        </p>
      )}
    </section>
  );
}
