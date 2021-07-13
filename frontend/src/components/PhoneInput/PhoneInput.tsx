import React, { useState } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import countries from '../../services/countries';
import classNames from 'classnames';

import styles from './phoneInput.module.scss';

interface IPhoneInputProps {
  countryCode: string;
  number: string;
}

const PhoneInput = () => {
  const [code, setCode] = useState<string>('');

  const changeCode = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setCode(e.currentTarget.value);
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
        <label htmlFor="code" />
        <Field name="code" value={code} />
        <label htmlFor="number" />
        <Field name="number" placeholder="number" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default PhoneInput;
