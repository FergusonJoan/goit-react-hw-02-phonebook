import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Formik, Field, ErrorMessage } from 'formik';
import { schema } from './schema';
import { FormEl, FormLabel } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit({ ...values });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationShema={schema}
        onSubmit={this.handleSubmit}
      >
        {(values, handleChange) => (
          <FormEl autoComplete="off">
            <FormLabel htmlFor="name">
              Name
              <Field
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="name" />
            </FormLabel>
            <FormLabel htmlFor="number">
              Number
              <Field
                type="tel"
                name="number"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="number" />
            </FormLabel>

            <button type="submit">Add contact</button>
          </FormEl>
        )}
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
