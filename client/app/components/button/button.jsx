import React, { useState }  from 'react';
import classnames from 'classnames/bind';
import { Text } from '@components';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = (props) => {
  const [ isHovered, setHovered ] = useState(false);
  const {
    text,
    size,
    type,
    active,
    onClick,
  } = props;

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  const handleButtonClick = () => {
    onClick(type);
  }

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

export default Button;
