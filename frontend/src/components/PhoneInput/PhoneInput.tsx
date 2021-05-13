import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import countries from '../../services/countries';
import classNames from 'classnames';

import styles from './phoneInput.module.scss';

interface IPhoneInputProps {
  countryCode: string;
  number: string;
}

const PhoneInput = () => {
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
        <Field name="color" as="select">
          {countries.map((country) => (
            <option value={country.name} key={country.code}>{`${country.code} ${country.flag}`}</option>
          ))}
        </Field>

        <label htmlFor="number" />
        <Field name="number" placeholder="number" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default PhoneInput;
