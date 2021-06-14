import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Rating } from "semantic-ui-react";
import "../styles/style.css";
import axios from "axios";
import KEYS from "/config.js";

export default function CardComponent({ product }) {
  const [relatedImage, setRelatedImages] = useState([
    "https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif",
  ]);
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

  if (product.id !== undefined) {
    useEffect(() => {
      // console.log(currentProductID);
      axios
        .get(`/products/${currentProductID}/styles/?default=true`, options)
        .then((res) => {
          // console.log("Why are we not getting here????", res.data.results);
          setRelatedImages(getDefaultImage(res.data.results));
        });
    }, []);
  }

  return (
    <div className="card">
      <div className="card-header">
        <img src={`${relatedImage}`} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{`${product.category}`}</span>
        <h4>{`${product.name}`}</h4>
        <p>{`${product.slogan}`}</p>
        <div className="user">
          <img
            src="https://freesvg.org/img/rickvanderzwet-dollar-sign-2.png"
            alt="price-symbol"
          />
          <div className="price-info">
            <h5>{`${product.default_price}`}</h5>
            <small>⭐⭐⭐⭐⭐</small>
          </div>
        </div>
      </div>
    </div>
  );
}
