import CONSTANTS from './policy-container.constants';

describe('PolicyContainer CONSTANTS', () => {
  it('should export the correct constants', () => {
    const received = CONSTANTS;

    const expected = {
      FETCH_POLICY: 'POLICY_CONTAINER/FETCH_POLICY',
      FETCH_POLICY_PENDING: 'POLICY_CONTAINER/FETCH_POLICY_PENDING',
      FETCH_POLICY_SUCCESS: 'POLICY_CONTAINER/FETCH_POLICY_SUCCESS',
      FETCH_POLICY_REJECTED: 'POLICY_CONTAINER/FETCH_POLICY_REJECTED',
    };

    expect(received).toMatchObject(expected);
  });
});
