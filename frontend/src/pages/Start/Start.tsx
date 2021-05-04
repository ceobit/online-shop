import React from 'react';
import classNames from 'classnames';

import started_gif from '../../images/started.gif';
import styles from './start.module.scss';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';

const Start = () => {
  const pageStyle = classNames(styles.started);

  return (
    <>
      <div className={pageStyle}>
        <img className={styles.started_gif} src={started_gif} alt="slides" />
        <div className={styles.started_gif_cover} />
        {/*<div className={styles.started_shape} />*/}
      </div>
      <div className={styles.started_bg}>
        <Text color="white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Text>
        <Button title="Get started" />
      </div>
    </>
  );
};

export default Start;
