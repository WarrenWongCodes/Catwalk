import React, { useState, useContext, useEffect } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
// import { Container, Divider, Comment } from "semantic-ui-react";
import StarRating from "./StarRatings.jsx";
import MoreReviews from "./MoreReviews.jsx";
import MakeReviewForm from "./MakeReviewForm.jsx";
import ReviewModal from "./ReviewModal";
import styles from "../styles/ReviewModals.module.css";
import tileStyles from "../styles/ReviewTile.module.css";

const { buttonWrapperStyles } = styles;
const { select } = tileStyles;

const ReviewsList = () => {
  const product = useContext(ProductContext);
  const review = useContext(ReviewsContext);

  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(true);
  const [count, setCount] = useState(2);

  const [allReviews, setAllReviews] = useState([]);
  const [sortedArray, setSortedArray] = useState(review);

  const handleClick = () => {
    setList(true);
  };

  const addTwo = () => {
    setCount(count + 2);
  };

  const totalReviews = review.length;

  useEffect(() => {
    setAllReviews(review);
  }, []);

  console.log("review: ", review);

  let reviews = review.map(
    ({ review_id, rating, summary, response, body, date, reviewer_name }) => {
      return (
        <div key={review_id}>
          {/* <Divider /> */}
          <StarRating rating={rating} />
          <div key={review_id}>
            <div style={{ color: "grey" }}>
              {reviewer_name} {new Date(date).toDateString()}
            </div>
            <span>{summary}</span>
            <p key={review_id}>{body}</p>
          </div>
          {/* <Divider /> */}
        </div>
      );
    }
  );

  const sortArray = (type) => {
    const types = {
      Helpful: "helpfulness",
      Newest: "date",
      Relevant: "rating",
    };

    const sortProperty = types[type];
    const sorted = [...review].sort((a, b) => {
      if (a[sortProperty] > b[sortProperty]) {
        return -1;
      }
      if (a[sortProperty] < b[sortProperty]) {
        return 1;
      }
      return 0;
    });
    setSortedArray(sorted);
  };

  if (list === true) {
    return (
      <div>
        <div>
          <p>{totalReviews} reviews, sorted by </p>
          <select
            defaultValue="Relevant"
            onChange={(e) => sortArray(e.target.value)}
            className={select}
          >
            <option value="Helpful">Helpful</option>
            <option value="Newest">Newest</option>
            <option value="Relevant">Relevant</option>
          </select>
        </div>
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
