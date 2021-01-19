import CONSTANTS from './policy-container.constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  policyDetails: {},
  fetchPolicyRequestStatus: null,
};

const fetchPolicyPending = (state, payload) => {
  return {
    fetchPolicyRequestStatus: 'pending',
  };
};

const fetchPolicySuccess = (state, payload) => {
  const {policy, vehicle} = payload.data;
  const {cover, address} = policy;
  const {make, model, colour, reg} = vehicle;

  return {
    policyDetails: {
      policyRef: policy['policy_ref'],
      cover,
      car: `${make} ${model} ${colour} ${reg}`,
      address: `${address['line_1']}, ${address['line_2']}, ${address.postcode}.`,
    },
    fetchPolicyRequestStatus: 'success',
  };
};

const fetchPolicyRejected = (state, payload) => {
  return {
    fetchPolicyRequestStatus: 'rejected',
  };
};

const atoms = {
  [CONSTANTS.FETCH_POLICY_PENDING]: fetchPolicyPending,
  [CONSTANTS.FETCH_POLICY_SUCCESS]: fetchPolicySuccess,
  [CONSTANTS.FETCH_POLICY_REJECTED]: fetchPolicyRejected,
};

const policyReducer = createReducer({
  initialState,
  atoms,
});

export default policyReducer;
