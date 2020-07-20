import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, Button} from '@material-ui/core';
const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = 'email';

const validate = values => {
  const errors = {}
  const requiredFields = [
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}


const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

let CustomerInfoForm = props => {
    const { handleSubmit, isAdding, pristine, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name={FIRST_NAME}
            component={renderTextField}
            label="First Name"
          />
        </div>
        <div>
          <Field
              name={LAST_NAME}
              component={renderTextField}
              label="Last Name"
          />
        </div>
        <div>
          <Field name={EMAIL} component={renderTextField} label="Email" />
        </div>
        <Button type="submit"  variant="contained" disabled={pristine || submitting}>Submit</Button> { isAdding ? "PROCESSING": "" }
      </form>
    )
}

CustomerInfoForm = reduxForm({
  // a unique name for the form
  form: 'CustomerInfo',
  validate
})(CustomerInfoForm)

export default CustomerInfoForm