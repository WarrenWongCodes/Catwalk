import React, { useState, useContext, useEffect} from "react";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
import { Container, Divider, Comment } from "semantic-ui-react";
import StarRating from './StarRatings.jsx';
import MoreReviews from './MoreReviews.jsx';
import '../styles/reviews.css';


const ReviewsList = () => {
  const product = useContext(ProductContext);
  const review = useContext(ReviewsContext);

  const [list, setList] = useState(true);

  console.log('review: ', review);
  console.log('product: ', product);
  console.log('list: ', list);

 const handleClick = () => {
    setList(false);
  }

  const reviews = review.map(
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

  if (list === true) {
    return (
      <div>
        <Container textAlign="left">
          <p>Reviews</p>
          <Divider />
          {list ? <div>{reviews.slice(0,2)} </div> : null }
        </Container>
        <MoreReviews
          toClick={handleClick}
          product={product.id}
          reviews={review}
          state={[list, setList]}
        />
        {console.log(list)}
      </div>
    );
  } else {
    return (
      <div>
        <Container textAlign="left">
          <p>Reviews</p>
          <Divider />
        </Container>
        <MoreReviews
          toClick={handleClick}
          product={product.id}
          reviews={review}
          state={[list, setList]}
        />
      </div>
    );
  }
};

export default ReviewsList;
