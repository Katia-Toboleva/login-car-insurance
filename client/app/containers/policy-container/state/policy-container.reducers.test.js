import policyReducer, {
  initialState,
  fetchPolicyPending,
  fetchPolicySuccess,
  fetchPolicyRejected
} from './policy-container.reducers';

describe('PolicyContainer reducer', () => {
  describe('initialState', () => {
    it('should match the object', () => {
      const received = initialState;

      const expected = {
        policyDetails: {},
        fetchPolicyRequestStatus: null,
      };

      expect(received).toEqual(expected);
    });
  });

  describe('fetchPolicyPending', () => {
    it('should match the object', () => {
      const received = fetchPolicyPending();

      const expected = {
        fetchPolicyRequestStatus: 'pending',
      };

      expect(received).toEqual(expected);
    });
  });

  describe('fetchPolicyRejected', () => {
    it('should match the object', () => {
      const received = fetchPolicyRejected();

      const expected = {
        fetchPolicyRequestStatus: 'rejected',
      };

      expect(received).toEqual(expected);
    });
  });

  describe('fetchPolicySuccess', () => {
    it('should match the object', () => {
      const state = initialState;
      const payload = {
        data: {
          policy: {
            address: {
              line_1: 'Flat 1, 11 The Street',
              line_2: 'Little Hampton',
              postcode: 'W53TR'
            },
            cover: 'Comprehensive',
            policy_ref: 'apple-orange-pear'
          },
          vehicle: {
            colour: 'black',
            make: 'tesla',
            model: 'S',
            reg: 'WO123XX',
          },
        },
      };

      const received = fetchPolicySuccess(state, payload)

      const expected = {
        policyDetails: {
          policyRef: 'apple-orange-pear',
          cover: 'Comprehensive',
          car: 'tesla S black WO123XX',
          address: 'Flat 1, 11 The Street, Little Hampton, W53TR.',
        },
        fetchPolicyRequestStatus: 'success',
      };

      expect(received).toMatchObject(expected);
    });
  });

  describe('reducer', () => {
    describe('when action.type = POLICY_CONTAINER/FETCH_POLICY_PENDING', () => {
      it('should return correct state', () => {
        const state = initialState;
        const action = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_PENDING',
        };
        const received = policyReducer(state, action);
        const expected = {
          fetchPolicyRequestStatus: 'pending',
        };

        expect(received).toMatchObject(expected);
      });
    });

    describe('when action.type = POLICY_CONTAINER/FETCH_POLICY_SUCCESS', () => {
      it('should return correct state', () => {
        const state = initialState;
        const payload = {
          data: {
            policy: {
              address: {
                line_1: 'Flat 1, 11 The Street',
                line_2: 'Little Hampton',
                postcode: 'W53TR'
              },
              cover: 'Comprehensive',
              policy_ref: 'apple-orange-pear'
            },
            vehicle: {
              colour: 'black',
              make: 'tesla',
              model: 'S',
              reg: 'WO123XX',
            },
          },
        };

        const action = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_SUCCESS',
          payload,
        };
        const received = policyReducer(state, action);
        const expected = {
          fetchPolicyRequestStatus: 'success',
        };

        expect(received).toMatchObject(expected);
      });
    });

    describe('when action.type = POLICY_CONTAINER/FETCH_POLICY_REJECTED', () => {
      it('should return correct state', () => {
        const state = initialState;
        const action = {
          type: 'POLICY_CONTAINER/FETCH_POLICY_REJECTED',
        };
        const received = policyReducer(state, action);
        const expected = {
          fetchPolicyRequestStatus: 'rejected',
        };

        expect(received).toMatchObject(expected);
      });
    });
  });
});
