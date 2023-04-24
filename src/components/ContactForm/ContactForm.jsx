import PropTypes from 'prop-types';
import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object({
  name: yup.string().required(),
  number: yup.number().min(7).max(16).required(),
});

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
        <Form autoComplete="off">
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" />
          </label>
          <label htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
