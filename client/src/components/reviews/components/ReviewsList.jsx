import React, { useContext } from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
import { Container, Divider, Comment } from "semantic-ui-react";
import RatingExampleStar from './StarRatings.jsx';

const ReviewsList = () => {
  const product = useContext(ProductContext);
  const review = useContext(ReviewsContext);
  // const styles = useContext(StylesContext);
  // console.log("ReviewsList Context from component", product.id, review[0]);


  const reviews = review.map(
    ({ review_id, rating, summary, response, body, date, reviewer_name }) => {
      return (
        <Container>
          <Divider />
          <RatingExampleStar />
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
    <div>
      <Container textAlign="left">
        {/* <RatingExampleStar /> */}
        <p>Reviews</p>
        <Divider />
        <div>{reviews}</div>
      </Container>
    </div>
  );
};

export default ReviewsList;
