import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

const ButtonGroup = (props) => {
  const {
    prefixCls, size, className, ...rest
  } = props;

  const classes = cx({
    [`${prefixCls}`]: true,
    [`${prefixCls}-${size}`]: size,
    [className]: className,
  });

  return <div {...rest} className={classes} />;
};

ButtonGroup.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
}

ButtonGroup.defaultProps = {
  prefixCls: 'fairy-btn-group',
}

export default ButtonGroup;