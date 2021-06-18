import React, { useState, useContext, useEffect } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
// import { Container, Divider, Comment } from "semantic-ui-react";
import styles from "../styles/ReviewModals.module.css";
import tileStyles from "../styles/ReviewTile.module.css";

const SortedReviews = (props) => {
  console.log("props; ", props);
  console.log("props.sortedArray:", props.sortedArray);

  const product = useContext(ProductContext);
  const review = useContext(ReviewsContext);
  const [type, setType] = useState(props.type);
  const [outerArray, setOuterArray] = useState(props.sortedArray);

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
    setOuterArray(sorted);
  };

  const please = props.allReviews.map(
    ({ review_id, rating, summary, response, body, date, reviewer_name }) => {
      return (
        <div key={review_id}>
          {/* <Divider /> */}
          {/* <StarRating rating={rating} /> */}
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

  console.log("please", please);

  return <div>hi</div>;
};

export default SortedReviews;
