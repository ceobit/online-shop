import React from 'react';
import classNames from 'classnames';

import styles from './text.module.scss';

interface ITextProps {
  children?: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  color?: 'dark' | 'grey' | 'white';
}

const Text = ({ size, color, children }: ITextProps) => {
  size = size || 'sm';
  color = color || 'dark';

  const textClass = classNames(styles.text, styles[`text_${size}`], styles[`text_${color}`]);

  return <p className={textClass}>{children}</p>;
};

export default Text;
