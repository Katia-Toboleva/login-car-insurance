import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Text } from '@components';
import styles from './input.scss';

const cx = classnames.bind(styles);

const Input = ({ placeholder, type, onChange, name }) => {
  const [state, setState] = useState({ focused: false, value: '' });

  const handleChange = (event) => {
    const { value } = event.target;

    setState({
      ...state,
      value,
    });

    onChange(value);
  };

  const handleInputFocus = () => {
    setState({
      ...state,
      focused: true,
    });
  };

  const handleInputBlur = () => {
    setState({
      ...state,
      focused: false,
    });
  };

  return (
    <div className={cx('input', {
      'input--focused': (state.focused || state.value),
    })}
    >
      <span className={styles['input__header']}>
        <Text
          text={placeholder}
          transform="capitalize"
        />
      </span>

      <input
        className={styles['input__body']}
        type={type}
        name={name}
        value={state.value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <span className={styles['input__underline']} />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  placeholder: 'text',
  onChange: () => { },
};

Input.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Input;
