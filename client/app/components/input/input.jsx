import React, { useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Text } from '@components';
import styles from './input.scss';

const cx = classnames.bind(styles);

const Input = ({ placeholder, type, onChange }) => {
  const [state, setState] = useState({ focused: false, value: '' });

  const handleChange = (event) => {
    const { value } = event.currentTarget;

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
  onChange: () => {},
  value: '',
  placeholder: 'text'
};

Input.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Input;
