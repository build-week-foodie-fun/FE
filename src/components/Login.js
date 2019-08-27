import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/auth/authActions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);
    console.log(touched)
    useEffect(()=> {
      if (status) {
          setUsers([...users, status]);
      }
    }, [status])

  return(
    <div>
      <a href="#">
        <img className="logo" src={require("../img/Foodie_Icon.png")} alt="Foodie Fun logo" />
      </a>
      <h1>Foodie Fun</h1>
      
      <Form>
        <label>Email
          <Field type="text" name="email" placeholder="food@foodiefun.com" />
        </label>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <label>Password
          <Field type="password" name="password" placeholder="Password" />
        </label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Login</button>
      </Form>
      <h4>Don't have an account yet? <Link to="/signup">Sign Up</Link> here. </h4>            
    </div>
    )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password  }) {
    return {
        email: email || "",
        password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(6).required("Required"),
  }),

  handleSubmit(values, { resetForm, props }) {
    console.log(values)
    console.log(props)
    props.login(values, props.history);
    resetForm();

      // axios
      //     .post('#', values)
      //     .then(res => {
      //         console.log(res)
      //         setStatus(res);
      //     })
      //     .catch(err => console.log(err.response));
  }

})(Login)

export default connect(null, { login })(FormikLoginForm)

// export default FormikLoginForm;