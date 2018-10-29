import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

class Button extends Component {

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    block: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
  };

  static defaultProps = {
    prefixCls: 'fairy-btn',
    size: 'default',
    block: false,
  };

  onClick = e => {
    const node = e.target;
    const attributeName = 'click-animating';
    node.removeAttribute(attributeName);
    node.setAttribute(attributeName, 'true');
    this.timer = window.setTimeout(() => {
      node.removeAttribute(attributeName);
      clearTimeout(this.timer);
    },800);

    const { onClick } = this.props;
    onClick && onClick();
  }

  render () {
    const {
      children, prefixCls, size, className, block, type, ...rest
    } = this.props;

    const classes = cx({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-block`]: block,
      [className]: className,
    });

    return (
      <button
        {...rest}
        className={classes}
        onClick={this.onClick}
      >
        {children||'button'}
      </button>
    )
  }
}

export default Button;
