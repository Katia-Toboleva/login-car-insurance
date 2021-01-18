import React, { useState } from 'react';
import {
  Text,
  Input,
  Button,
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

  const handleLoginButtonClick = () => {
    onLoginSubmit({
      username,
      password,
    });
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
        <div className={styles['login__body']}>
          <Input
            type="text"
            placeholder="user name"
            onChange={handleUsernameChange}
          />
          <div className={styles['login__password']}>
            <Input
              type={typePassword ? "password" : "text"}
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
        {loginStatus === "rejected" && <div>Error!</div>}
        <div className={styles['login__controls']}>
          <Button
            type="login"
            text="sign in"
            size="medium"
            onClick={username && password ? handleLoginButtonClick : null}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
