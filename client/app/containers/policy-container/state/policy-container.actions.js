import CONSTANTS from './policy-container.constants';
import * as api from './policy-container.api';

export const fetchPolicyPending = () => ({
  type: CONSTANTS.FETCH_POLICY_PENDING,
});

export const fetchPolicySuccess = (data) => {
  return {
    type: CONSTANTS.FETCH_POLICY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchPolicyRejected = () => ({
  type: CONSTANTS.FETCH_POLICY_REJECTED,
});

export const fetchPolicy = () => (dispatch) => {
  const success = data => {
    dispatch(fetchPolicySuccess(data));
  };

  const rejected = err => {
    dispatch(fetchPolicyRejected(err));
  };

  dispatch(fetchPolicyPending());

  return api.fetchPolicyApi()
    .then(response => response.json())
    .then(success)
    .catch(rejected);
}
