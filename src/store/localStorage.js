import { defaultSkills, defaultUser } from './defaultState';

const STORAGE_KEY = 'mini-malt-store';

export function loadState() {
  let serializedState;

  try {
    serializedState = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return undefined;
  }

  if (!serializedState) {
    return {
      user: defaultUser,
      skills: defaultSkills,
    };
  }

  try {
    const parsedState = JSON.parse(serializedState);
    const firstName = normalizeText(parsedState?.user?.firstName);
    const lastName = normalizeText(parsedState?.user?.lastName);
    const skills = normalizeSkills(parsedState?.skills);

    return {
      user: {
        firstName,
        lastName,
        fullName: firstName && lastName ? `${firstName} ${lastName}` : null,
      },
      skills: {
        skills,
        skillsCount: skills.length,
      },
    };
  } catch {
    return {
      user: defaultUser,
      skills: defaultSkills,
    };
  }
}

export function saveState(state) {
  try {
    const stateToPersist = {
      user: {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
      },
      skills: state.skills.skills,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToPersist));
  } catch {
    // Ignore storage errors to keep the app usable.
  }
}

function normalizeText(value) {
  const text = typeof value === 'string' ? value.trim() : '';
  return text.length > 0 ? text : null;
}

function normalizeSkills(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((skill) => typeof skill === 'string')
    .map((skill) => skill.trim())
    .filter(Boolean);
}
