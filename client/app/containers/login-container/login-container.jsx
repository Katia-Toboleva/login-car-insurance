import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Login } from '@components';
import * as actions from './state/login-container.actions';
import { Redirect } from 'react-router-dom';

const LoginContainer = ({ state, actions }) => {
  const handleLoginSubmit = (data) => {
    actions.fetchLogin(data)
  }

  return (
    <>
      {state.fetchDataRequestStatus === "success" && <Redirect to="/policy" />}
      {state.fetchDataRequestStatus !== "success" && (
        <Login
          loginStatus={state.fetchDataRequestStatus}
          onLoginSubmit={handleLoginSubmit}
        />
      )}
    </>
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.loginReducer,
  },
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
