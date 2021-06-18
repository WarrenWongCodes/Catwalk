import React, { useContext, useState } from "react";
import ReviewsList from "./components/ReviewsList";
import AverageRatingDisp from "./components/Averagerating";
import MoreReviews from "./components/MoreReviews";
// import { Container, Divider, Comment } from "semantic-ui-react";
import { ReviewsContext, MetaContext } from "../../store.jsx";
import styles from "./reviews.module.css";

const { displayContainer, reviewContainer, mainContainer, container } = styles;

const Reviews = () => {
  const reviews = useContext(ReviewsContext);

  return (
    <>
      <div className={`container  ${mainContainer}`} id="scrollIntoComp">
        <div className={` ${reviewContainer}`}>
          <AverageRatingDisp />
        </div>
        <div className={` ${displayContainer}`}>
          <ReviewsList />
        </div>
      </div>
    </>
  );
};

export default Reviews;
