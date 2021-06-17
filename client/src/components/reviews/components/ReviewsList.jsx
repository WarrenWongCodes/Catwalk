import React, { useState, useContext, useEffect } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
// import { Container, Divider, Comment } from "semantic-ui-react";
import StarRating from "./StarRatings.jsx";
import MoreReviews from "./MoreReviews.jsx";
import MakeReviewForm from "./MakeReviewForm.jsx";
import ReviewModal from "./ReviewModal";
import styles from "../styles/ReviewModals.module.css";

const { buttonWrapperStyles } = styles;

const ReviewsList = () => {
  const product = useContext(ProductContext);
  const review = useContext(ReviewsContext);

  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(true);
  const [count, setCount] = useState(2);

  const handleClick = () => {
    setList(true);
  };

  const addTwo = () => {
    setCount(count + 2);
  };

  const reviews = review.map(
    ({ review_id, rating, summary, response, body, date, reviewer_name }) => {
      return (
        <div key={review_id}>
          {/* <Divider /> */}
          <StarRating rating={rating} />
          <div key={review_id}>
            <div style={{ color: "grey" }}>
              {reviewer_name} {new Date(date).toDateString()}
            </div>
            {/* <Comment as="h4">{summary}</Comment> */}
            <p key={review_id}>{body}</p>
          </div>
          {/* <Divider /> */}
        </div>
      );
    }
  );

  // setList(reviews);
  console.log("reviews: ", reviews);
  console.log("count: ", count, "reviews.length: ", reviews.length);

  console.log("list: ", list);

  if (list === true) {
    return (
      <div>
        <p>Reviews</p>
        {/* <Divider /> */}
        {list ? <div>{reviews.slice(0, count)} </div> : null}
        {reviews.length > count ? (
          <button
            onClick={() => {
              addTwo();
            }}
          >
            More Reviews
          </button>
        ) : null}

        {/* <MoreReviews
          toClick={handleClick}
          product={product.id}
          reviews={review}
          state={[list, setList]}
        /> */}
        <div
          className={buttonWrapperStyles}
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}> Write A Review </button>
          <ReviewModal open={isOpen} closeModal={() => setIsOpen(false)}>
            <MakeReviewForm />
          </ReviewModal>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Reviews</p>
        {/* <Divider /> */}
        {/* <MoreReviews
          toClick={handleClick}
          product={product.id}
          reviews={review}
          state={[list, setList]}
        /> */}
        <div> -- </div>
        <div
          className={buttonWrapperStyles}
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}> Write A Review </button>
          <ReviewModal open={isOpen} closeModal={() => setIsOpen(false)}>
            <MakeReviewForm />
          </ReviewModal>
        </div>
      </div>
    );
  }
};

export default ReviewsList;
