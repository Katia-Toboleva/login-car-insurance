import {
  fetchLoginPending,
  fetchLoginSuccess,
  fetchLoginRejected,
  fetchLogin,
} from './login-container.actions';

describe('LoginContainer actions', () => {
  describe('fetchLoginPending', () => {
    it('should return the correct data', () => {
      const received = fetchLoginPending();

      const expected = {
        type: 'LOGIN_CONTAINER/FETCH_LOGIN_PENDING',
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('fetchLoginSuccess', () => {
    it('should return the correct data', () => {
      const received = fetchLoginSuccess({ a: 1 });

      const expected = {
        type: 'LOGIN_CONTAINER/FETCH_LOGIN_SUCCESS',
      };

      expect(received).toMatchObject(expected);
    });

    it('updates localStorage with access_token', () => {
      expect(Object.keys(localStorage.__STORE__).length).toBe(1);
      expect(Object.keys(localStorage.__STORE__)).toContain('access-token');
    });
  });

  describe('fetchLoginRejected', () => {
    it('should return the correct data', () => {
      const received = fetchLoginRejected();

      const expected = {
        type: 'LOGIN_CONTAINER/FETCH_LOGIN_REJECTED',
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('fetchLogin', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    describe('when the fetch is resolving', () => {
      it('should call the right action', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
        const dispatch = jest.fn();

        const action = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_PENDING',
        };

        const actionSuccess = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_SUCCESS',
        };

        const promise = fetchLogin({ username: 'bob', password: '123' })(dispatch)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith(actionSuccess);
          });

        expect(dispatch).toHaveBeenCalledWith(action);

        return promise;
      });
    });

    describe('when the fetch is rejecting', () => {
      it('should call the right actions', () => {
        fetch.mockReject();

        const dispatch = jest.fn();

        const action = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_PENDING',
        };

        const actionReject = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_REJECTED',
        };

        const promise = fetchLogin({ username: 'bob', password: '123' })(dispatch)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith(action);
            expect(dispatch).toHaveBeenCalledWith(actionReject);
          });

        return promise;
      });
    });
  });
});
