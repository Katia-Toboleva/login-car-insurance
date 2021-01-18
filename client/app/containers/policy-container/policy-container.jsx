import React, {useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Policy, Spinner } from '@components';
import * as actions from './state/policy-container.actions';

const PolicyContainer = ({ state, actions }) => {
  const { fetchDataRequestStatus, policyDetails} = state;

  useEffect(() => {
    actions.fetchPolicy();
  }, [])

  return (
    <>
      {fetchDataRequestStatus === "rejected" && <div>Error!</div> }
      {fetchDataRequestStatus === "pending" && <Spinner absolute />}
      {fetchDataRequestStatus === "success" && (
        <Policy
          policyDetails={policyDetails}
        />
      )}
    </>
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.policyReducer,
  },
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PolicyContainer);
