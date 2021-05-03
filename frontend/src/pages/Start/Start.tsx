import React from 'react';
import classNames from 'classnames';

import started_gif from '../../images/started.gif';
import styles from './start.module.scss';
import Button from '../../components/Button/Button';

const Start = () => {
  const pageStyle = classNames(styles.started);

  return (
    <>
      <div className={pageStyle}>
        <img className={styles.started_gif} src={started_gif} alt="slides" />
        <div className={styles.started_gif_cover} />
        <div className={styles.started_shape} />
      </div>
      <div className={styles.started_bg}>
        <Button title="Get started" size="sm" />
      </div>
    </>
  );
};

export default Start;
