import React from 'react';
import PropTypes from 'prop-types';
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

Icon.defaultProps = {
  icon: 'closedEye',
  size: 'grey',
  color: 'medium',
  onClick: () => { },
};

Icon.propTypes = {
  icon: PropTypes.oneOf(['closedEye', 'openEye']),
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf(['grey', 'red']),
  onClick: PropTypes.func,
};

export default Icon;
