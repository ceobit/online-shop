import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  title: string;
  size?: 'lg' | 'md' | 'sm';
  handleButton: () => void;
}

/** new comment for JSDoc**/

const Button = ({ title, size, handleButton }: IButtonProps) => {
  size = size || 'sm';
  const btnClass = classNames(styles.button, styles[`button_${size}`]);

  return (
    <button className={btnClass} onClick={handleButton}>
      {title}
    </button>
  );
};

export default Button;
