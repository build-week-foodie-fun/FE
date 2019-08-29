import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addReview, getReviews } from "../store/reviews/reviewsActions";

import styled from "styled-components";

const HeadImg = styled.img`
  width: 100%;
  height: 200px;
  margin: 0;
  object-fit: cover;
`;

const LoginTitle = styled.h1`
  color: #d80000;
  text-align: center;
`;

const BtnDiv = styled.div`
  text-align: center;
`;

function ReviewForm({ touched, errors, ...props }) {
  console.log(props.reviews);
  return (
    <div className="container">
      <HeadImg src={require("../img/peopleEating.jpg")} alt="pizza" />
      <div className="loginForm">
        <LoginTitle>Create a new review here!</LoginTitle>

        <Form style={{ display: "flex", flexDirection: "column" }}>
          <label className="restaurant_name">
            Restaurant
            <Field type="text" name="restaurant_name" />
            {touched.restaurant_name && errors.restaurant_name && (
              <p className="error">{errors.restaurant_name}</p>
            )}
          </label>
          <label className="restaurant_type">
            Restaurant Type
            <Field type="text" name="restaurant_type" />
            {touched.restaurant_type && errors.restaurant_type && (
              <p className="error">{errors.restaurant_type}</p>
            )}
          </label>
          <label className="item_name">
            Food Item
            <Field type="text" name="item_name" />
            {touched.item_name && errors.item_name && (
              <p className="error">{errors.item_name}</p>
            )}
          </label>
          <label className="date_of_visit">
            Date of Visit
            <Field type="date" name="date_of_visit" />
            {touched.date_of_visit && errors.date_of_visit && (
              <p className="error">{errors.date_of_visit}</p>
            )}
          </label>
          <label className="price">
            Price
            <Field type="number" min={0} step={0.01} name="price" />
            {touched.price && errors.price && (
              <p className="error">{errors.price}</p>
            )}
          </label>
          <label className="food_rating">
            Rating
            <Field type="number" min={1} max={5} step={0.1} name="food_rating" />
            {touched.food_rating && errors.food_rating && (
              <p className="error">{errors.food_rating}</p>
            )}
          </label>
          <label className="wait_time">
            Wait Time
            <Field type="text" name="wait_time" />
            {touched.wait_time && errors.wait_time && (
              <p className="error">{errors.wait_time}</p>
            )}
          </label>
          <label className="photo_of_order">
            Photo of Order
            <Field type="text" name="photo_of_order" placeholder="Photo url" />
            {touched.photo_of_order && errors.photo_of_order && (
              <p className="error">{errors.photo_of_order}</p>
            )}
          </label>
          <label className="comments">
            Other Comments
            <Field component="textarea" name="comments" />
            {touched.comments && errors.comments && (
              <p className="error">{errors.comments}</p>
            )}
          </label>
          <BtnDiv><button className="submitBtn" type="submit">
            Submit
          </button></BtnDiv>
        </Form>
      </div>
    </div>
  );
}

const FormikReviewForm = withFormik({
  mapPropsToValues(values) {
    return {
      user_id: parseInt(localStorage.getItem("user_id")),
      restaurant_name: values.restaurant_name || "",
      restaurant_type: values.restaurant_type || "",
      item_name: values.item_name || "",
      price: values.price || "",
      food_rating: values.food_rating || "",
      comments: values.comments || "",
      wait_time: values.wait_time || "",
      date_of_visit: values.date_of_visit || "",
      photo_of_order: values.photo_of_order || "",
    };
  },

  validationSchema: Yup.object().shape({
    restaurant_name: Yup.string().required(
      "Restaurant name is a required field.",
    ),
    restaurant_type: Yup.string(),
    item_name: Yup.string().required("Food item is a required field."),
    price: Yup.number().required("Price is a required field."),
    food_rating: Yup.number().required("Rating is a required field."),
    comments: Yup.string(),
    wait_time: Yup.string(),
    date_of_visit: Yup.date(),
    // photo_of_order: Yup.string()
    //   .url()
    //   .required("Photo of order is a required field."),
  }),

  handleSubmit(values, { props }) {
    if (props.activeReview) {
      props.editReview(values, props.history, props.reviews.id)
    } else {
      props.addReview(values, props.history);
    }
  },
})(ReviewForm);

const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews,
  };
};

export default connect(
  mapStateToProps,
  { addReview, getReviews },
)(FormikReviewForm);
