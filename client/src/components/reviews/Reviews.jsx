import React, { useContext, useState} from 'react';
import ReviewsList from './components/ReviewsList';
import AverageRatingDisp from './components/Averagerating'
import { ReviewsContext, MetaContext } from '../../store.jsx';

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
