import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Login } from '@components';
import * as actions from './state/login-container.actions';
import { Redirect } from 'react-router-dom';

 export const LoginContainer = ({ state, actions }) => {
  const handleLoginSubmit = (data) => {
    actions.fetchLogin(data)
  }

  return (
    <>
      {state.fetchLoginRequestStatus === "success" && <Redirect to="/policy" />}
      {state.fetchLoginRequestStatus !== "success" && (
        <Login
          loginStatus={state.fetchLoginRequestStatus}
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
