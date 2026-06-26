import { defaultUser } from '../defaultState';

const UPDATE_USER = 'user/update';

const initialState = defaultUser;

export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload,
  };
}

export default function userReducer(state = initialState, action) {
  if (action.type !== UPDATE_USER) {
    return state;
  }

  const firstName = action.payload.firstName;
  const lastName = action.payload.lastName;
  const fullName =
    firstName && lastName ? `${firstName} ${lastName}` : null;

  return {
    firstName,
    lastName,
    fullName,
  };
}
