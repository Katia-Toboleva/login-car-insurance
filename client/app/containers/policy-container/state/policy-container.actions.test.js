import {
  fetchPolicyPending,
  fetchPolicySuccess,
  fetchPolicyRejected,
  fetchPolicy,
} from './policy-container.actions';

describe('PolicyContainer actions', () => {
  describe('fetchPolicyPending', () => {
    it('should return the correct data', () => {
      const received = fetchPolicyPending();

      const expected = {
        type: 'POLICY_CONTAINER/FETCH_POLICY_PENDING',
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('fetchPolicySuccess', () => {
    it('should return the correct data', () => {
      const data = { a: 1 };
      const received = fetchPolicySuccess(data);

      const expected = {
        type: 'POLICY_CONTAINER/FETCH_POLICY_SUCCESS',
        payload: {
          data,
        },
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('fetchPolicyRejected', () => {
    it('should return the correct data', () => {
      const received = fetchPolicyRejected();

      const expected = {
        type: 'POLICY_CONTAINER/FETCH_POLICY_REJECTED',
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('fetchPolicy', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    describe('when the fetch is resolving', () => {
      it('should call the right action', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
        const dispatch = jest.fn();

        const actionPending = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_PENDING',
        };

        const actionSuccess = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_SUCCESS',
          payload: {
            data: { data: '12345' },
          },
        };

        const promise = fetchPolicy()(dispatch)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith(actionSuccess);
          });

        expect(dispatch).toHaveBeenCalledWith(actionPending);

        return promise;
      });
    });

    describe('when the fetch is rejecting', () => {
      it('should call the right actions', () => {
        fetch.mockReject();

        const dispatch = jest.fn();

        const actionPending = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_PENDING',
        };

        const actionReject = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_REJECTED',
        };

        const promise = fetchPolicy()(dispatch)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith(actionReject);
          });
        expect(dispatch).toHaveBeenCalledWith(actionPending);

        return promise;
      });
    });
  });
});
