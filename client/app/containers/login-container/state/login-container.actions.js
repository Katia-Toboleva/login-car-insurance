import CONSTANTS from './login-container.constants';
import * as api from './login-container.api';

const fetchLoginPending = () => ({
  type: CONSTANTS.FETCH_LOGIN_PENDING,
});

const fetchLoginSuccess = (data) => {
  localStorage.setItem('access-token', data['access_token']);

  return {
  type: CONSTANTS.FETCH_LOGIN_SUCCESS,
}};

const fetchLoginRejected = err => ({
  type: CONSTANTS.FETCH_LOGIN_REJECTED,
  payload: err,
});

export const fetchLogin = (data) => (dispatch) => {

  const success = data => {
    dispatch(fetchLoginSuccess(data));
  };

  const rejected = err => {
    dispatch(fetchLoginRejected(err));
  };

  dispatch(fetchLoginPending());

  api.fetchLogin(data)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
}
