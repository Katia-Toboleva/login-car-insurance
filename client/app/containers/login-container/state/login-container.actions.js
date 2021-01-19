import CONSTANTS from './login-container.constants';
import * as api from './login-container.api';

export const fetchLoginPending = () => ({
  type: CONSTANTS.FETCH_LOGIN_PENDING,
});

export const fetchLoginSuccess = (data) => {
  localStorage.setItem('access-token', data['access_token']);

  return {
    type: CONSTANTS.FETCH_LOGIN_SUCCESS,
  }
};

export const fetchLoginRejected = () => ({
  type: CONSTANTS.FETCH_LOGIN_REJECTED,
});

export const fetchLogin = (data) => (dispatch) => {

  const success = data => {
    dispatch(fetchLoginSuccess(data));
  };

  const rejected = err => {
    dispatch(fetchLoginRejected(err));
  };

  dispatch(fetchLoginPending());

  return api.fetchLoginApi(data)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};
