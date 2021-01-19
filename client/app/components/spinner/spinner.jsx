import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './spinner.scss';

const cx = classnames.bind(styles);

const Spinner = ({ absolute }) => (
  <div className={cx('spinner', {
    'spinner--absolute': absolute,
  })}
  />
);

Spinner.defaultProps = {
  absolute: false,
};

Spinner.propTypes = {
  absolute: PropTypes.bool,
};

export default Spinner;
