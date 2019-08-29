import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/auth/authActions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import styled from "styled-components";

const HeadImg = styled.img`
  width: 100%;
  height: 200px;
  margin: 2rem auto;
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

const Login = ({ errors, touched, ...props }) => {
  return(
    <div>
      <HeadImg src={require("../img/pizza.jpg")} alt="pizza" />
      <div className="loginForm">
        <LogoImg
          src={require("../img/Foodie_Icon.png")}
          alt="Foodie Fun logo"
        />
        <LoginTitle>Foodie Login</LoginTitle>

        <Form>
          <label>
            Username
            <Field type="text" name="username" placeholder="foodiefun" />
          </label>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}

          <label>
            Password
            <Field type="password" name="password" placeholder="Password" />
          </label>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <BtnDiv><button type="submit">{props.error ? "Error" : props.isLoading ? "..." : "Login "}</button></BtnDiv>
            
        </Form>
        <h3>
          Don't have an account yet? <Link to="/signup">Sign Up</Link> here.{" "}
        </h3>
      </div>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string().required("Please enter your password."),
  }),

  handleSubmit(values, { resetForm, props }) {
    props.login(values, props.history);
    resetForm();
  },
})(Login);

const mapStateToProps = state => {
  return {
      isLoading: state.auth.isLoading,
      error: state.auth.error,
  }
};

export default connect(
  mapStateToProps,
  { login },
)(FormikLoginForm);
