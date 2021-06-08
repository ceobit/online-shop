import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  title: string;
  size?: 'lg' | 'md' | 'sm';
}

/** new comment for JSDoc**/


const Button = ({ title, size }: IButtonProps) => {
  size = size || 'sm';
  const btnClass = classNames(styles.button, styles[`button_${size}`]);

  return <button className={btnClass}>{title}</button>;
};

export default Button;
