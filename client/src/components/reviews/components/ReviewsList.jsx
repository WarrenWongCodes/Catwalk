import React, { useState, useContext, useEffect } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
import StarRating from "./StarRatings.jsx";
import MoreReviews from "./MoreReviews.jsx";
import MakeReviewForm from "./MakeReviewForm.jsx";
import ReviewModal from "./ReviewModal";
import styles from "../styles/ReviewModals.module.css";
import tileStyles from "../styles/ReviewTile.module.css";
import dividers from "../styles/reviews.css";
import buttons from "../../qa/styles/QuestionsList.module.css";
import meta from "../../qa/styles/MetaData.module.css";

const { buttonWrapperStyles } = styles;
const { select, titleRow, userName, ratingStar, helpStyle } = tileStyles;
const { solid, reviewRow } = dividers;
const { buttonSpacing } = buttons;
const { metaData, link, seeMoreAnswers } = meta;

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

  let reviews = review.map(
    ({
      review_id,
      rating,
      summary,
      response,
      body,
      date,
      reviewer_name,
      helpfulness,
    }) => {
      return (
        <div key={review_id}>
          <hr className={solid} />
          <div className={titleRow}>
            <StarRating rating={rating} className={ratingStar} />
            <div key={review_id} className={`username ${metaData}`}>
              <div style={{ color: "grey" }}>
                {reviewer_name} {new Date(date).toDateString()}
              </div>
            </div>
          </div>
          <span>{summary}</span>
          <p style={{ color: "grey" }} key={review_id}>
            {body}
          </p>
          <div>
            <div className={helpStyle}>
              Helpful?{" "}
              <span>
                <a style={{ color: "grey" }} href="">
                  Yes
                </a>{" "}
                ({helpfulness}) |{" "}
                <a className="link" style={{ color: "grey" }} href="">
                  Report
                </a>
              </span>
            </div>
          </div>
          <hr className={solid} />
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
          <h3>{totalReviews}</h3>
          <p>reviews, sorted by </p>
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
        {list ? <div>{reviews.slice(0, count)} </div> : null}
        <div>
          {reviews.length > count ? (
            <button
              className={`textButton ${buttonSpacing}`}
              onClick={() => {
                addTwo();
              }}
            >
              More Reviews
            </button>
          ) : null}
          <button
            className={`textButton ${buttonSpacing}`}
            onClick={() => setIsOpen(true)}
          >
            {" "}
            Write A Review{" "}
          </button>
        </div>
        <div
          className={buttonWrapperStyles}
          onClick={() => console.log("clicked")}
        >
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
        <div> -- </div>
        <div
          className={buttonWrapperStyles}
          onClick={() => console.log("clicked")}
        >
          <button className="textButton" onClick={() => setIsOpen(true)}>
            {" "}
            Write A Review{" "}
          </button>
          <ReviewModal open={isOpen} closeModal={() => setIsOpen(false)}>
            <MakeReviewForm />
          </ReviewModal>
        </div>
      </div>
    );
  }
};

export default ReviewsList;
