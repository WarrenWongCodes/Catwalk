import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container, Divider, Comment } from "semantic-ui-react";
import ReviewsList from './ReviewsList';
import StarRating from './StarRatings.jsx';
import '../styles/reviews.css';
import CallMoreReviews from '../api/CallMoreReviews';


const MoreReviews = (props) => {

  const [reviews, setReviews] = useState([]);
  const _isMounted = useRef(true);

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    }
  }, []);

  const onClickInputChange = () => {
    const response = CallMoreReviews.get("/reviews/", {
      params: {
        count: 100,
        product_id: props.product,
      }
    })
      .then((response) => {
        if(_isMounted.current) {
          setReviews(response.data.results);
          history.push()
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const allReviews = reviews.map(
    ({ review_id, rating, summary, response, body, date, reviewer_name }) => {
      return (
        <div key={review_id} >
          <Divider />
          <StarRating rating={rating}/>
          <div key={review_id}>
            <div style={{ color: "grey" }}>
              {reviewer_name} {new Date(date).toDateString()}
            </div>
            <Comment as="h4">{summary}</Comment>
            <p key={review_id}>{body}</p>
          </div>
          <Divider />
        </div>
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