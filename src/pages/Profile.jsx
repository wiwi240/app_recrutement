import { useDispatch, useSelector } from 'react-redux';
import { updateSkills } from '../store/reducers/skillsReducer';
import { updateUser } from '../store/reducers/userReducer';

export default function Profile() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName ?? '');
  const lastName = useSelector((state) => state.user.lastName ?? '');
  const skills = useSelector((state) => state.skills.skills);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const nextFirstName = normalizeText(formData.get('firstName'));
    const nextLastName = normalizeText(formData.get('lastName'));
    const nextSkills = splitSkills(formData.get('skills'));

    dispatch(
      updateUser({
        firstName: nextFirstName,
        lastName: nextLastName,
      }),
    );
    dispatch(updateSkills(nextSkills));
  };

  return (
    <section className="panel">
      <h1>Profil</h1>
      <p className="lead">
        Modifie ici les informations qui seront visibles dans le header et sur
        la page d&apos;accueil.
      </p>

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Prénom
          <input name="firstName" type="text" defaultValue={firstName} />
        </label>

        <label>
          Nom
          <input name="lastName" type="text" defaultValue={lastName} />
        </label>

        <label>
          Compétences
          <textarea
            name="skills"
            rows="5"
            defaultValue={skills.join(', ')}
            placeholder="React, Redux, CSS"
          />
        </label>

        <button type="submit">Enregistrer le profil</button>
      </form>
    </section>
  );
}

function normalizeText(value) {
  const text = String(value ?? '').trim();
  return text.length > 0 ? text : null;
}

function splitSkills(value) {
  return String(value ?? '')
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);
}
