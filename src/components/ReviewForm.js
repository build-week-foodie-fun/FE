import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function ReviewForm() {
  return (
    <div className="review-form">
      <Formik>
        <Form>
          <label className="restaurant_name" html for="Name">
            Restaurant
            <Field type="text" name="restaurant_name" />
          </label>
          <label className="restaurant_type" html for="type">
            Restaurant Type
            <Field type="text" name="restaurant_type" />
          </label>
          <label className="food_item" html for="food-item">
            Food Item
            <Field type="text" name="food_item" />
          </label>
          <label className="date" html for="date">
            Date
            <Field type="date" name="date" />
          </label>
          <label className="food_price" html for="price">
            Price
            <Field type="text" name="food_price" />
          </label>
          <label className="food_rating" html for="rating">
            Rating
            <Field type="text" name="food_rating" />
          </label>
          <label className="wait_time" html for="wait-time">
            Wait Time
            <Field type="text" name="wait_time" />
          </label>
          <Field
            type="text"
            name="restaurant_type"
            placeholder="Upload image"
          />
          <label className="comments" html for="comments">
            Other Comments
            <Field type="text" name="restaurant_type" />
          </label>
          <button className="submitBtn">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
