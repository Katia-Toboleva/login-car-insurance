import { fetchLoginApi } from './login-container.api';

describe('LoginContainer api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  describe('fetchLoginApi', () => {
    it('should load correct data', () => {
      const userDetails = { username: 'myname', password: '123' }
      const received = fetchLoginApi(userDetails);

      const url = 'https://api.bybits.co.uk/auth/token';
      const options = {
        method: 'POST',
        headers: {
          environment: 'mock',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userDetails.username,
          password: userDetails.password,
          type: "USER_PASSWORD_AUTH",
        }),
      }
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(url, options);
      expect(typeof received.then).toBe("function");
    })
  });
});
