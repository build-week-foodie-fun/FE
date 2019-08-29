import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  addReview,
  getReviews,
  editReview,
} from "../store/reviews/reviewsActions";

import styled from "styled-components";

const HeadImg = styled.img`
  width: 100%;
  height: 200px;
  margin: 2rem auto;
  object-fit: cover;
`;

const LoginTitle = styled.h1`
  color: #d80000;
  text-align: center;
`;

const BtnDiv = styled.div`
  text-align: center;
  grid-column: 1 / span 2;
`;

const FormContainer = styled.div`
  width: 880px;
  margin: 0 auto;
  padding: 30px;
  font-weight: bold;
  background: #ededed;
  box-shadow: 2px, 2px, 10px, 10px #7c7c7c;
`;

function ReviewForm({ touched, errors, ...props }) {
  useEffect(() => {
    if (props.activeReview) {
      props.setValues(props.activeReview);
    }
  }, [props.activeReview]);

  return (
    <div>
      <HeadImg src={require("../img/peopleEating.jpg")} alt="pizza" />
      <FormContainer>
        <LoginTitle>
          {props.activeReview
            ? "Editing a review!"
            : "Create a new review here!"}
        </LoginTitle>

        <Form className="review_form">
          <label className="restaurant_name">
            Restaurant
            <Field className="review_input" type="text" name="restaurant_name" />
            {touched.restaurant_name && errors.restaurant_name && (
              <p className="error">{errors.restaurant_name}</p>
            )}
          </label>
          <label className="restaurant_type">
            Restaurant Type
            <Field className="review_input" type="text" name="restaurant_type" />
            {touched.restaurant_type && errors.restaurant_type && (
              <p className="error">{errors.restaurant_type}</p>
            )}
          </label>
          <label className="item_name">
            Food Item
            <Field className="review_input" type="text" name="item_name" />
            {touched.item_name && errors.item_name && (
              <p className="error">{errors.item_name}</p>
            )}
          </label>
          <label className="date_of_visit">
            Date of Visit
            <Field className="review_input" type="date" name="date_of_visit" />
            {touched.date_of_visit && errors.date_of_visit && (
              <p className="error">{errors.date_of_visit}</p>
            )}
          </label>
          <label className="price">
            Price
            <Field className="review_input" type="number" min={0} step={0.01} name="price" />
            {touched.price && errors.price && (
              <p className="error">{errors.price}</p>
            )}
          </label>
          <label className="food_rating">
            Rating
            <Field
              className="review_input"
              type="number"
              min={1}
              max={5}
              step={0.1}
              name="food_rating"
            />
            {touched.food_rating && errors.food_rating && (
              <p className="error">{errors.food_rating}</p>
            )}
          </label>
          <label className="wait_time">
            Wait Time
            <Field className="review_input" type="text" name="wait_time" />
            {touched.wait_time && errors.wait_time && (
              <p className="error">{errors.wait_time}</p>
            )}
          </label>
          <label className="photo_of_order">
            Photo of Order
            <Field className="review_input" type="text" name="photo_of_order" placeholder="Photo url" />
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
            {props.error ? "Error" : props.isLoading ? "..." : "Submit "}
          </button></BtnDiv>
        </Form>
      </FormContainer>
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
      photo_of_order: values.photo_of_order || "https://cdn1.imggmi.com/uploads/2019/8/30/0529c2e79be5339e9cf244e25b84642d-full.png",
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
    date_of_visit: Yup.string(),
    photo_of_order: Yup.string()
      .url()
      .required("Photo of order is a required field."),
  }),

  handleSubmit(values, { props }) {
    if (props.activeReview) {
      props.editReview(values, props.history, props.activeReview.id);
    } else {
      props.addReview(values, props.history);
    }
  },
})(ReviewForm);

const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews,
    activeReview: state.reviews.activeReview,
    error: state.reviews.error,
    isLoading: state.reviews.isLoading,
  };
};

export default connect(
  mapStateToProps,
  { addReview, getReviews, editReview },
)(FormikReviewForm);
