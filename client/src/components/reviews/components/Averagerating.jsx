import React, { useContext, useState, useEffect } from "react";
import { MetaContext } from "../../../store.jsx";
import StarRating from "./StarRatings";
import RatingBars from "./RatingBars";
import Recommend from "./Recommend";
import SizeSlider from "./SizeSlider";
import SliderBreakdown from "./SliderBreakdown";
import styles from "../styles/slider.module.css";
import display from "../styles/Ratings.module.css";

const { topRow, starRow, aveRow } = display;

const AveRatingDisp = (props) => {
  const meta = useContext(MetaContext);
  const ratings = meta.ratings;
  const [ave, setAve] = useState(0);

  const Ave = (props) => {
    const ratingsArr = [];
    let totalRatings = 0;
    let display = 0;
    if (ratings !== undefined && ratings !== null) {
      for (let key in ratings) {
        ratingsArr.push(parseInt(key) * parseInt(ratings[key]));
        totalRatings += parseInt(ratings[key]);
      }
      display = ratingsArr.reduce((acc, rating) => {
        return acc + rating / totalRatings;
      }, 0);
    }
    useEffect(() => {
      setAve(Math.ceil(display * 4) / 4);
    });

    return Math.ceil(display * 4) / 4;
  };

  return (
    <div>
      <h2 className="ratingsHeadline">Ratings & Reviews</h2>
      <div className={topRow}>
        <div className="disp">
          {/* <div> */}
          <Ave className={aveRow} />
          {/* </div> */}
          <StarRating rating={ave} className={starRow} />
        </div>
      </div>

      <div>
        <Recommend />
      </div>
      <RatingBars />
      <div>
        <SliderBreakdown />
      </div>
    </div>
  );
};

export default AveRatingDisp;
