import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSkills } from '../store/reducers/skillsReducer';
import { updateUser } from '../store/reducers/userReducer';

export default function Profile() {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
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
    setIsSaved(true);
  };

  return (
    <section className="profile-card">
      <h1>Mon profil</h1>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-grid">
          <label>
            Prénom
            <input
              name="firstName"
              type="text"
              defaultValue={firstName}
              onChange={() => setIsSaved(false)}
            />
          </label>

          <label>
            Nom
            <input
              name="lastName"
              type="text"
              defaultValue={lastName}
              onChange={() => setIsSaved(false)}
            />
          </label>
        </div>

        <label>
          Compétences
          <textarea
            name="skills"
            rows="4"
            defaultValue={skills.join('\n')}
            placeholder={'Dev front-end\nReact\nJotai'}
            onChange={() => setIsSaved(false)}
          />
        </label>

        <div className="profile-actions">
          <button type="submit" className="save-button">
            SAUVEGARDER
          </button>
          {isSaved ? <p className="save-message">OK, sauvegardé !</p> : null}
        </div>
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
    .split(/\n|,/)
    .map((skill) => skill.trim())
    .filter(Boolean);
}
