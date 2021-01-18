import React from 'react';
import classnames from 'classnames/bind';
import styles from './spinner.scss';

const cx = classnames.bind(styles);

const Spinner = ({ absolute }) => (
  <div className={cx('spinner', {
    'spinner--absolute': absolute,
  })}
  />
);

export default Spinner;
