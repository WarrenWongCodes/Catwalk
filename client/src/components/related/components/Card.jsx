import React, { useState, useEffect, useContext } from "react";
import { IdContext } from "../../../store.jsx";
import Styles from "../related.module.css";
import axios from "axios";
import KEYS from "/config.js";
import { FaStar, FaRegStar } from "react-icons/fa";
// import { setId } from "../../../store.jsx";

// console.log(setId);

import StarRating from "../../reviews/components/StarRatings.jsx";
import starStyle from "../../../styles/global/star.css";

// console.log(star);

export default function CardComponent({ product }) {
  const id = useContext(IdContext);
  const [relatedImage, setRelatedImages] = useState([
    "https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif",
  ]);
  const [relatedRating, setRelatedRating] = useState(0);
  const currentProductID = product.id;

  const options = {
    baseURL: `${KEYS.ENDPOINT}`,
    headers: {
      Authorization: `${KEYS.API_KEY}`,
    },
  };

  const getDefaultImage = (results) => {
    for (let i = 0; i < results.length; i++) {
      if (results[i]["default?"] !== false) {
        // console.log(results[i].photos[0].thumbnail_url);
        return results[i].photos[0].thumbnail_url;
      }
      if (results[0].photos[0].thumbnail_url === null) {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
      }
    }

    return results[0].photos[0].thumbnail_url;
  };

  const Rating = (props) => {
    const ratings = props.ratings;
    const ratingsArr = [];
    let totalRatings = 0;
    let display = 0;
    if (ratings !== undefined) {
      for (let key in ratings) {
        ratingsArr.push(parseInt(key) * parseInt(ratings[key]));
        totalRatings += parseInt(ratings[key]);
      }
      display = ratingsArr.reduce((acc, rating) => {
        return acc + rating / totalRatings;
      }, 0);
    }
    return Math.ceil(display * 4) / 4;
  };

  const handleTitleClick = () => {
    console.log("Related Product Title Clicked!");
    console.log(Store);
    // setId(currentProductID);
  };

  if (product.id !== undefined) {
    useEffect(() => {
      axios
        .get(`/products/${currentProductID}/styles/?default=true`, options)
        .then((res) => {
          setRelatedImages(getDefaultImage(res.data.results));
        });

      axios
        .get(`/reviews/meta?product_id=${currentProductID}`, options)
        .then((res) => {
          setRelatedRating(Rating(res.data));
        });
    }, []);
  }

  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <img src={`${relatedImage}`} alt="rover" />
        {/* <div className={Styles.iconOverlay}>
          <a className={Styles.icon} title="User Profile">
            <p>Hello</p>
          </a>
        </div> */}
      </div>
      <div className={Styles.cardBody}>
        <span
          className={`${Styles.tag} ${Styles.tagTeal}`}
        >{`${product.category}`}</span>
        <h2
          className={Styles.title}
          onClick={() => handleTitleClick()}
        >{`${product.name}`}</h2>
        <p className={Styles.description}>{`${product.slogan}`}</p>
        <div className={Styles.user}>
          {/* <img
            src="https://freesvg.org/img/rickvanderzwet-dollar-sign-2.png"
            alt="price-symbol"
          /> */}
          <div className={Styles.priceInfo}>
            <p>{`$ ${product.default_price}`}</p>
            {/* <p>{`${relatedRating} out of 5`}</p> */}
            <p>★★★☆☆</p>
          </div>
        </div>
      </div>
    </div>
  );
}
