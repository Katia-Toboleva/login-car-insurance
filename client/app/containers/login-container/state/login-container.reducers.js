import CONSTANTS from './login-container.constants';
import { createReducer } from '../../../state/utilities';

export const initialState = {
  fetchLoginRequestStatus: null,
};

export const fetchLoginPending = (state, payload) => {
  return {
    fetchLoginRequestStatus: 'pending',
  };
};

export const fetchLoginSuccess = (state, payload) => {
  return {
    fetchLoginRequestStatus: 'success',
  };
};

export const fetchLoginRejected = (state, payload) => {
  return {
    fetchLoginRequestStatus: 'rejected',
  };
};

const atoms = {
  [CONSTANTS.FETCH_LOGIN_PENDING]: fetchLoginPending,
  [CONSTANTS.FETCH_LOGIN_SUCCESS]: fetchLoginSuccess,
  [CONSTANTS.FETCH_LOGIN_REJECTED]: fetchLoginRejected,
};

const loginReducer = createReducer({
  initialState,
  atoms,
});

export default loginReducer;
