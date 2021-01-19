import loginReducer, {
  initialState,
  fetchLoginPending,
  fetchLoginSuccess,
  fetchLoginRejected
} from './login-container.reducers';

describe('LoginContainer reducer', () => {
  describe('initialState', () => {
    it('should match the object', () => {
      const received = initialState;

      const expected = {
        fetchLoginRequestStatus: null,
      };

      expect(received).toEqual(expected);
    });
  });

  describe('fetchLoginPending', () => {
    it('should match the object', () => {
      const received = fetchLoginPending();

      const expected = {
        fetchLoginRequestStatus: 'pending',
      };

      expect(received).toEqual(expected);
    });
  });

  describe('fetchLoginRejected', () => {
    it('should match the object', () => {
      const received = fetchLoginRejected();

      const expected = {
        fetchLoginRequestStatus: 'rejected',
      };

      expect(received).toEqual(expected);
    });
  });

  describe('fetchLoginSuccess', () => {
    it('should match the object', () => {
      const received = fetchLoginSuccess(undefined, {
        data: 1,
      });

      const expected = {
        fetchLoginRequestStatus: 'success',
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('reducer', () => {
    describe('when action.type = LOGIN_CONTAINER/FETCH_LOGIN_PENDING', () => {
      it('should return correct state', () => {
        const state = initialState;
        const action = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_PENDING',
        };
        const received = loginReducer(state, action);
        const expected = {
          fetchLoginRequestStatus: 'pending',
        };

        expect(received).toMatchObject(expected);
      });
    });

    describe('when action.type = LOGIN_CONTAINER/FETCH_LOGIN_SUCCESS', () => {
      it('should return correct state', () => {
        const state = initialState;
        const action = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_SUCCESS',
        };
        const received = loginReducer(state, action);
        const expected = {
          fetchLoginRequestStatus: 'success',
        };

        expect(received).toMatchObject(expected);
      });
    });
    
    describe('when action.type = LOGIN_CONTAINER/FETCH_LOGIN_REJECTED', () => {
      it('should return correct state', () => {
        const state = initialState;
        const action = {
          type: 'LOGIN_CONTAINER/FETCH_LOGIN_REJECTED',
        };
        const received = loginReducer(state, action);
        const expected = {
          fetchLoginRequestStatus: 'rejected',
        };

        expect(received).toMatchObject(expected);
      });
    });
  });
});
