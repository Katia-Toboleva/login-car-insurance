import CONSTANTS from './login-container.constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  fetchDataRequestStatus: null,
};

const fetchLoginPending = (state, payload) => {
  return {
    fetchDataRequestStatus: 'pending',
  };
};

const fetchLoginSuccess = (state, payload) => {
  return {
    fetchDataRequestStatus: 'success',
  };
};

const fetchLoginRejected = (state, payload) => {
  return {
    fetchDataRequestStatus: 'rejected',
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
