import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Input,
  SubmitButton,
  Spinner,
  Icon,
} from '@components';

import styles from './login.scss';

const Login = ({ loginStatus, onLoginSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [typePassword, setInputType] = useState(true);

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleInputTypeClick = () => {
    setInputType(!typePassword);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      onLoginSubmit({
        username,
        password,
      });
    }
  };

  return (
    <div className={styles['login__wrapper']}>
      <div className={styles.login}>
        <div className={styles['login__title']}>
          <Text
            text="sign in"
            transform="capitalize"
            size="large"
            weight="bold"
            center
          />
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div className={styles['login__body']}>
            <Input
              type="text"
              name="username"
              placeholder="user name"
              onChange={handleUsernameChange}
            />
            <div className={styles['login__password']}>
              <Input
                type={typePassword ? "password" : "text"}
                name="password"
                placeholder="password"
                onChange={handlePasswordChange}
              />
              <div className={styles['login__password__icon']}>
                <Icon
                  icon={typePassword ? "closedEye" : "openEye"}
                  color={typePassword ? "grey" : "red"}
                  size="medium"
                  onClick={handleInputTypeClick}
                />
              </div>
            </div>
          </div>
          {loginStatus === "pending" && <Spinner />}
          {loginStatus === "rejected" && <div>Oops! Wrong Username or Password</div>}
          <div className={styles['login__controls']}>
            <SubmitButton
              type="submit"
              text="sign in"
              active={username !== '' && password !== ''}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Login.defaultProps = {
  loginStatus: 'pending',
  onLoginSubmit: () => { },
};

Login.propTypes = {
  loginStatus: PropTypes.oneOf(['pending', 'rejected', 'success']),
  onLoginSubmit: PropTypes.func,
};

export default Login;
