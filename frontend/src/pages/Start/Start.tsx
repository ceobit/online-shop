import React from 'react';
import classNames from 'classnames';

import started_gif from '../../images/started.gif';
import styles from './start.module.scss';

const Start = () => {
  const pageStyle = classNames(styles.started);

  return (
    <div className={pageStyle}>
      <img className={styles.started_gif} src={started_gif} alt="slides" />
      <div className={styles.started_gif_cover}/>
    </div>
  );
};

export default Start;
