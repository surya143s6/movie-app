import { Formik, useFormik } from "formik";
import { data } from "react-router";

import { object, string } from "yup";

let loginValidationSchema = object({
  username: string().required(),
  password: string().required(),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      username: "surya",
      password: "rio",
    },
    validationSchema: loginValidationSchema,
  });

  return (
    <form onSubmit={Formik.handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="username"
      />
      {formik.errors.username && formik.errors.username
        ? formik.errors.username
        : null}
      <input
        type="text"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="password"
      />
      {formik.errors.password && formik.errors.password
        ? formik.errors.password
        : null}
      <button type="submit">Login</button>
    </form>
  );
}
