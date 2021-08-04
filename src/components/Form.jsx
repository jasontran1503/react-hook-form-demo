import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function Form({ demoValue }) {
  const validation = yup.object().shape({
    firstName: yup.string().required('First Name is not empty'),
    lastName: yup.string().required('Last Name is not empty'),
    address: yup.string().required('Address is not empty'),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validation),
  });

  setValue('firstName', demoValue.firstName);
  setValue('lastName', demoValue.lastName);
  setValue('address', demoValue.address);

  const onSubmit = (data) => {
    console.log(data);
    console.log('demoValue', demoValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            {...register('firstName')}
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          />
          <p className="invalid-feedback">{errors.firstName?.message}</p>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            {...register('lastName')}
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          />
          <p className="invalid-feedback">{errors.lastName?.message}</p>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            {...register('address')}
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
          />
          <p className="invalid-feedback">{errors.address?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  demoValue: PropTypes.object,
};

Form.defaultProps = {
  demoValue: {},
};

export default Form;
