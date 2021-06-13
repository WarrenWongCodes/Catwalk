import React, { useContext, useState, useEffect } from 'react';
import { MetaContext } from '../../../store.jsx';

const RatingBars = () => {
  const meta = useContext(MetaContext);

  const ratings = {}

  const Bar = (props) => {
    let percent = props.percent * 10;
    let style = {
      width: percent,
    }
    return (
      <>
        <div className='row'>
          <div className='leftSide'>
            <div>{props.star} Stars</div>
          </div>
          <div className='center'>
            <div className='barContainer'>
              <div className='bar' style={{...style}}></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (meta.ratings !== undefined) {
    for (let i = 1; i <= 5; i++) {
      if (meta.ratings[i] === undefined) {
        ratings[i] = 0;
      } else {
        ratings[i] = meta.ratings[i];
      }
    }
  }

  const ratingsArr = Object.entries(ratings);

  const RatingsList = ratingsArr.map((item) => {
    return <Bar key={item[0][0]} star={item[0][0]} percent={item[1]} />
  })

  return (
    <>
       <div></div>
       <div>
         {RatingsList}
       </div>
    </>
  )
}

export default RatingBars;