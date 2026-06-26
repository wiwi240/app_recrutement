import { defaultSkills } from '../defaultState';

const UPDATE_SKILLS = 'skills/update';

const initialState = defaultSkills;

export function updateSkills(payload) {
  return {
    type: UPDATE_SKILLS,
    payload,
  };
}

export default function skillsReducer(state = initialState, action) {
  if (action.type !== UPDATE_SKILLS) {
    return state;
  }

  const skills = Array.isArray(action.payload) ? action.payload : [];

  return {
    skills,
    skillsCount: skills.length,
  };
}
