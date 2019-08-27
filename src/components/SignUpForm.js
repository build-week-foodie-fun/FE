import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { register } from "../store/auth/authActions";

const SignUpForm = ({ errors, touched }) => {
  return (
    <div>
      <a href="#">
        <img
          className="logo"
          src={require("../img/Foodie_Icon.png")}
          alt="Foodie Fun logo"
        />
      </a>
      <h1>Foodie Fun</h1>

      <Form>
        <label>
          Username
          <Field type="text" name="username" placeholder="FoodieFun" />
        </label>

        <label>
          Password
          <Field type="password" name="password" placeholder="Password" />
        </label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <label>
          Confirm Password
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, password, confirmPassword }) {
    return {
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string()
      .min(6)
      .required("Please enter at least 6 letters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirm is required"),
  }),

  handleSubmit(values, { props }) {
    let user = {
      username: values.username,
      password: values.password,
    };

    props.register(user, props.history);
  },
})(SignUpForm);

export default connect(
  null,
  { register },
)(FormikSignUpForm);
