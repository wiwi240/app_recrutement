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
  const [currentSkills, setCurrentSkills] = useState(skills);
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    const nextSkill = normalizeText(skillInput);

    if (!nextSkill) {
      return;
    }

    setCurrentSkills((previousSkills) => [...previousSkills, nextSkill]);
    setSkillInput('');
    setIsSaved(false);
  };

  const removeSkill = (skillToRemove) => {
    setCurrentSkills((previousSkills) =>
      previousSkills.filter((skill) => skill !== skillToRemove),
    );
    setIsSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const nextFirstName = normalizeText(formData.get('firstName'));
    const nextLastName = normalizeText(formData.get('lastName'));
    const pendingSkill = normalizeText(skillInput);
    const nextSkills = pendingSkill
      ? [...currentSkills, pendingSkill]
      : currentSkills;

    dispatch(
      updateUser({
        firstName: nextFirstName,
        lastName: nextLastName,
      }),
    );
    dispatch(updateSkills(nextSkills));
    setCurrentSkills(nextSkills);
    setSkillInput('');
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

        <div className="skills-editor">
          <label>
            Nouvelle compétence
            <div className="skill-input-row">
              <input
                name="skill"
                type="text"
                value={skillInput}
                placeholder="Ex: React"
                onChange={(event) => {
                  setSkillInput(event.target.value);
                  setIsSaved(false);
                }}
              />
              <button
                type="button"
                className="add-skill-button"
                onClick={addSkill}
              >
                Ajouter une compétence
              </button>
            </div>
          </label>

          <div className="skills-preview">
            <span>Compétences ajoutées</span>
            {currentSkills.length > 0 ? (
              <ul className="profile-skills-list">
                {currentSkills.map((skill) => (
                  <li key={skill} className="profile-skill-item">
                    <span>{skill}</span>
                    <button
                      type="button"
                      className="remove-skill-button"
                      onClick={() => removeSkill(skill)}
                    >
                      Supprimer
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-skills-message">
                Aucune compétence ajoutée pour le moment.
              </p>
            )}
          </div>
        </div>

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
