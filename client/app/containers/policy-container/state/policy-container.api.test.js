import { fetchPolicyApi } from './policy-container.api';

describe('LoginContainer api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  describe('fetchPolicyApi', () => {
    it('should load correct data', () => {
      const received = fetchPolicyApi();
      const accessToken = null;

      const url = 'https://api.bybits.co.uk/policys/details';
      const options = {
        method: 'GET',
        headers: {
          environment: 'mock',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
      }
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(url, options);
      expect(typeof received.then).toBe("function");
    });

    it('should call localStorage', () => {
      expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    });
  });
});
