import React from 'react';
import classnames from 'classnames/bind';

import * as glyphs from './svg';

import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = ({
  icon,
  size,
  color,
  onClick,
}) => (
  <div
    className={cx('icon', {
      [`icon--color-${color}`]: color,
      [`icon--size-${size}`]: size,
      'icon--clickable': onClick,
    })}
    onClick={onClick}
  >
    <i dangerouslySetInnerHTML={{ __html: glyphs[icon] }} />
  </div>
);

export default Icon;
