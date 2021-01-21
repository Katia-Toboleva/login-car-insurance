import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './submit-button.scss';

const cx = classnames.bind(styles);

const SubmitButton = ({ text, active }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <input
      type="submit"
      value={text}
      className={cx('submit-button', {
        'submit-button--hovered': isHovered,
        'submit-button--disabled': !active,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

SubmitButton.defaultProps = {
  text: 'sign in',
  active: false,
};

SubmitButton.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
};

export default SubmitButton;
