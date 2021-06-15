import React, { useContext, useState} from 'react';
import ReviewsList from './components/ReviewsList';
import AverageRatingDisp from './components/Averagerating';
import MoreReviews from './components/MoreReviews';
import { ReviewsContext, MetaContext } from '../../store.jsx';
import './styles/reviews.css';

const Reviews = () => {
  const reviews = useContext(ReviewsContext);

  return (
    <>
      <ReviewsList />

      <AverageRatingDisp />
    </>
  );
};

export default Reviews;
