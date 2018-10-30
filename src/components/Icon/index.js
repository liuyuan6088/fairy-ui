import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/less/font-awesome.less';
import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

const Icon = ({ children, className, type, ...rest }) => {

  const classes = cx({
    [`fa fa-${type}`]: true,
    [className]: className,
  });

  return (
    <i {...rest} className={classes} aria-hidden="true">
      {children}
    </i>
  );
}

Icon.propTypes = {
  // 分类 (fa:fontawesome图标)
  // classType: PropTypes.oneOf(['fa']),
  className: PropTypes.string,
  type: PropTypes.string.isRequired
};

Icon.defaultProps = {
  // classType: 'fa'
};

export default Icon;
