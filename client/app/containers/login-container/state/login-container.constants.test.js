import CONSTANTS from './login-container.constants';

describe('LoginContainer CONSTANTS', () => {
  it('should export the correct constants', () => {
    const received = CONSTANTS;

    const expected = {
      FETCH_LOGIN: 'LOGIN_CONTAINER/FETCH_LOGIN',
      FETCH_LOGIN_PENDING: 'LOGIN_CONTAINER/FETCH_LOGIN_PENDING',
      FETCH_LOGIN_SUCCESS: 'LOGIN_CONTAINER/FETCH_LOGIN_SUCCESS',
      FETCH_LOGIN_REJECTED: 'LOGIN_CONTAINER/FETCH_LOGIN_REJECTED',
    };

    expect(received).toMatchObject(expected);
  });
});
