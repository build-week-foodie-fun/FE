import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { register } from "../store/auth/authActions";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadImg = styled.img`
  width: 100%;
  height: 200px;
  margin: 0;
  object-fit: cover;
`;

const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
`;

const LoginTitle = styled.h1`
  color: #d80000;
  text-align: center;
`;

const BtnDiv = styled.div`
  text-align: center;
`;

const SignUpForm = ({ errors, touched }) => {
  return (
    <div className="container">
      <HeadImg src={require("../img/phoneAndFood.jpg")} alt="phone and food" />
      <div className="loginForm">
        <LogoImg
          src={require("../img/Foodie_Icon.png")}
          alt="Foodie Fun logo"
        />

        <LoginTitle>Foodie Sign Up</LoginTitle>

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

          <BtnDiv>
            <button type="submit">Submit</button>
          </BtnDiv>
        </Form>
        <h3>
          Already have an account? <Link to="/login">Sign In</Link> here.{" "}
        </h3>
      </div>
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
