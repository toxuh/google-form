import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import useFormSubmit from "./useFormSubmit";

const Form: React.FC = () => {
  const [isAgree, setIsAgree] = useState(false);

  const { isLoading, handleSubmitForm } = useFormSubmit();

  const initialValues = {
    firstName: "",
    mail: "",
    country: "",
    phone: "",
    password: "",
  };

  const { errors, touched, values, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: yup.object({
      firstName: yup
        .string()
        .trim()
        .min(2, "This field must contain at least 2 characters.")
        .max(30, "This field can be maximum 30 characters.")
        .required("This field is required."),
      mail: yup
        .string()
        .email("Type valid email")
        .required("This field is required."),
      country: yup
        .string()
        .trim()
        .min(2, "This field must contain at least 2 characters.")
        .max(30, "This field can be maximum 30 characters.")
        .required("This field is required."),
      phone: yup
        .string()
        .trim()
        .min(2, "This field must contain at least 2 characters.")
        .max(30, "This field can be maximum 30 characters.")
        .required("This field is required."),
      password: yup
        .string()
        .trim()
        .min(8, "This field must contain at least 8 characters.")
        .max(30, "This field can be maximum 30 characters.")
        .required("This field is required."),
    }),
    onSubmit: (data) => {
      if (isAgree) {
        handleSubmitForm(data);
      } else {
        alert("You must agree with terms and conditions.");
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
          type="text"
          name="firstName"
          placeholder="Name"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && touched.firstName && (
          <p className="text-red-500 text-xs">{errors.firstName}</p>
        )}
      </div>
      <div>
        <input
          className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
          type="email"
          name="mail"
          placeholder="Email"
          value={values.mail}
          onChange={handleChange}
        />
        {errors.mail && touched.mail && (
          <p className="text-red-500 text-xs">{errors.mail}</p>
        )}
      </div>
      <div>
        <input
          className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
          type="text"
          name="country"
          placeholder="Country"
          value={values.country}
          onChange={handleChange}
        />
        {errors.country && touched.country && (
          <p className="text-red-500 text-xs">{errors.country}</p>
        )}
      </div>
      <div>
        <input
          className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
          type="text"
          name="phone"
          placeholder="Phone"
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && touched.phone && (
          <p className="text-red-500 text-xs">{errors.phone}</p>
        )}
      </div>
      <div>
        <input
          className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}
      </div>
      <div className="flex">
        <label className="text-gray-500">
          <input
            type="checkbox"
            className="border-sky-400 mr-3"
            checked={isAgree}
            onChange={() => setIsAgree(!isAgree)}
          />
          I accept terms & conditions
        </label>
      </div>
      <div className="flex justify-center my-6">
        <button
          type="submit"
          className="rounded-full p-3 w-full sm:w-56 bg-sky-500 text-white text-lg transition font-semibold hover:bg-teal-800 hover:text-teal-100"
          disabled={isLoading}
        >
          Create account
        </button>
      </div>
      <div className="flex justify-center ">
        <p className="text-gray-500">Already have an account?</p>
        <a href="/sign-in" className="text-sky-600 ml-2">
          Sign In
        </a>
      </div>
    </form>
  );
};

export default Form;
