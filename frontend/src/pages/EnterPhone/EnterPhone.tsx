import React from 'react';

import PhoneInput from '../../components/PhoneInput/PhoneInput';
import styles from './enterPhone.module.scss';

const EnterPhone = () => {
  return (
    <div className={styles.enterPhonePage}>
      <PhoneInput />
    </div>
  );
};

export default EnterPhone;
