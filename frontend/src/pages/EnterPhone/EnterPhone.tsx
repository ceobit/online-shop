import React from 'react';
import classNames from 'classnames';

import PhoneInput from '../../components/PhoneInput/PhoneInput';
import styles from './enterPhone.module.scss';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

const EnterPhone = () => {
  const onSend = () => {};
  return (
    <div className={styles.enterPhonePage}>
      <div >
        <Text color="grey">Please enter your phone number to verify your account</Text>
        <PhoneInput />
        <Button title="Send verification code" handleButton={onSend} size="sm" />
      </div>
    </div>
  );
};

export default EnterPhone;
