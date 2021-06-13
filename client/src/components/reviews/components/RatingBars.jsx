import React, { useContext, useState } from 'react';
import { MetaContext } from '../../../store.jsx';



const RatingBars = () => {
  const meta = useContext(MetaContext);
  console.log('meta: ', meta.ratings)

  return (
    <>
    <div>Bars</div>
    </>
  )
}

export default RatingBars;