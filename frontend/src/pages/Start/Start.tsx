import React from 'react';
import classNames from 'classnames';

import started_picture from '../../images/started.gif';
import logo from '../../images/logo.png';
import styles from './start.module.scss';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';

const Start = () => {
  const pageStyle = classNames(styles.started);
  const { started_gif, started_gif_cover, started_bg, started_logo } = styles;
  return (
    <>
      <div className={pageStyle}>
        <img className={started_gif} src={started_picture} alt="slides" />
        <div className={started_gif_cover} />
        {/*<div className={styles.started_shape} />*/}
      </div>
      <div className={started_bg}>
        <img className={started_logo} src={logo} alt="logo" />
        <Text color="white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Text>
        <Button title="Get started" />
      </div>
    </>
  );
};

export default Start;
