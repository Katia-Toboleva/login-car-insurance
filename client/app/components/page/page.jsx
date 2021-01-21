import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginContainer, PolicyContainer } from '../../containers';

const IsLoggedin = ({ children }) => {
  const accessToken = localStorage.getItem('access-token');

  if (accessToken) {
    return children;
  }

  return (
    <Redirect to='/login' />
  )
};

const Page = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginContainer />
      </Route>
      <Route path="/policy">
        <IsLoggedin>
          <PolicyContainer />
        </IsLoggedin>
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  )
};

export default Page;
