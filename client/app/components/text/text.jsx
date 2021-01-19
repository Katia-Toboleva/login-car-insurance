import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = (props) => {
  const {
    text,
    size,
    color,
    center,
    transform,
    weight,
  } = props;

  return (
    <div className={cx('text', {
      [`text--size-${size}`]: size,
      [`text--color-${color}`]: color,
      [`text--transform-${transform}`]: transform,
      [`text--weight-${weight}`]: weight,
      'text--center': center,
    })}
    >
      <span>{text}</span>
    </div>
  );
};

Text.defaultProps = {
  text: '',
  size: 'medium',
  color: 'black',
  center: false,
};

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'black']),
  center: PropTypes.bool,
  transform: PropTypes.string,
  weight: PropTypes.string,
};

export default Text;
