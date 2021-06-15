import React, { useContext, useState, useEffect } from 'react';
import { Container, Divider, Comment } from "semantic-ui-react";
import ReviewsList from './ReviewsList';
import StarRating from './StarRatings.jsx';
import '../styles/reviews.css';
import CallMoreReviews from '../api/CallMoreReviews';


const MoreReviews = (props) => {

  const [reviews, setReviews] = useState([]);

  const onClickInputChange = () => {
    const response = CallMoreReviews.get("/reviews/", {
      params: {
        count: 100,
        product_id: props.product,
      }
    })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const allReviews = reviews.map(
    ({ review_id, rating, summary, response, body, date, reviewer_name }) => {
      return (
        <Container key={review_id} >
          <Divider />
          <StarRating rating={rating}/>
          <div key={review_id}>
            <Container textAlign="right" style={{ color: "grey" }}>
              {reviewer_name} {new Date(date).toDateString()}
            </Container>
            <Comment as="h4">{summary}</Comment>
            <p key={review_id}>{body}</p>
          </div>
          <Divider />
        </Container>
      );
    }
  );

  return (
    <>
      <div>{allReviews}</div>
      <button onClick={() => {
        props.toClick()
        onClickInputChange()
        }}
      >
        More Reviews
      </button>

    </>
  );
};

export default MoreReviews;