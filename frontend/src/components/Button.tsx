import React from 'react';
import classNames from 'classnames';

import classes from './Button.module.scss';

interface IButtonProps {
  title: string;
  size: 'lg' | 'md' | 'sm';
}

const Button = ({ title, size }: IButtonProps) => {
  const btnClass = classNames(classes.button, `classes.button_${size}`);

  return <button className={btnClass}>{title}</button>;
};

export default Button;
