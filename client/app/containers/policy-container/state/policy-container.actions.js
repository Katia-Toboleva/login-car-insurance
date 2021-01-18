import CONSTANTS from './policy-container.constants';
import * as api from './policy-container.api';

const fetchPolicyPending = () => ({
  type: CONSTANTS.FETCH_POLICY_PENDING,
});

const fetchPolicySuccess = (data) => {
  return {
  type: CONSTANTS.FETCH_POLICY_SUCCESS,
  payload: {
    data,
  },
}};

const fetchPolicyRejected = err => ({
  type: CONSTANTS.FETCH_POLICY_REJECTED,
  payload: err,
});

export const fetchPolicy = () => (dispatch) => {

  const success = data => {
    dispatch(fetchPolicySuccess(data));
  };

  const rejected = err => {
    dispatch(fetchPolicyRejected(err));
  };

  dispatch(fetchPolicyPending());

  api.fetchPolicy()
    .then(response => response.json())
    .then(success)
    .catch(rejected);
}
