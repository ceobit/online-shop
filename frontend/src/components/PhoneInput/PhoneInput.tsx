import React, { useState } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import countries from '../../services/countries';
import classNames from 'classnames';

import styles from './phoneInput.module.scss';

interface IPhoneInputProps {
  countryCode: string;
  number: string;
}

// find country code with country name
const findCodeIntoObject = (value: string): string => {
  const { code } = countries.filter((el) => el.name === value)[0];
  return code;
};

const PhoneInput = () => {
  const [code, setCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // get country code
  const changeCode = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setCode(findCodeIntoObject(value));
  };

  const handlePhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPhoneNumber(code + value);
  };

  return (
    <Formik
      initialValues={{
        countryCode: '',
        number: '',
      }}
      onSubmit={(values: IPhoneInputProps, { setSubmitting }: FormikHelpers<IPhoneInputProps>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <Field name="setCode" as="select" onChange={changeCode}>
          {countries.map((country) => (
            <option
              value={country.name}
              key={country.code}
            >{`${country.flag} ${country.name}`}</option>
          ))}
        </Field>
        <label htmlFor="phoneNumber" />
        <Field name="phoneNumber" value={code} onChange={handlePhoneNumber} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default PhoneInput;
