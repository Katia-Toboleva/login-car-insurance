import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Text } from '@components';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = (props) => {
  const [isHovered, setHovered] = useState(false);
  const {
    text,
    size,
    type,
    active,
    onClick,
  } = props;


  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleButtonClick = () => {
    onClick(type);
  };

  return (
    <div
      className={cx('button', {
        [`button--type-${type}`]: type,
        'button--hovered': isHovered,
        'button--disabled': !active,
      })}
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        text={text}
        size={size}
        transform="uppercase"
        color="white"
      />
    </div>
  );
};

Button.defaultProps = {
  text: 'sign in',
  size: 'medium',
  type: 'login',
  active: false,
  onClick: () => { },
};

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['login']).isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
