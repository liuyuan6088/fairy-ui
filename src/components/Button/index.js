import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from './style.less'

const Button = () => {
  let input;
  const onClick = () => input.focus();
  return (
    <div className={style.color}>
      <input ref={el => (input = el)} />
      <div onClick={onClick} className={style.span}>ddddd</div>
    </div>
  )
};

export default Button;
