// ContactForm.js
import React from 'react';
import { useFormik } from 'formik';
import InputField from './InputField'; // Adjust the path based on your folder structure
import { contactValidationSchema } from '../../validations/contactFormValidations'; // Adjust the path to your validation schema

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      console.log('Form data:', values);
      // Handle form submission (e.g., send data to an API)
    },
  });

  return (
    <form className="max-w-lg mx-auto" onSubmit={formik.handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        placeholder="Your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />
      <InputField
        label="Phone"
        type="text"
        name="phone"
        placeholder="Your phone number"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && formik.errors.phone}
      />
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your message"
          rows="4"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
