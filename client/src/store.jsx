import React, { useState } from "react";
import KEYS from "/config.js";
import axios from "axios";

export const Store = () => {
  const [id, setId] = useState(11002);
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [qa, setQa] = useState([]);
  const [cart, setCart] = useState([]);
  const [interactions, setInteractions] = useState({
    element: "",
    widget: "",
    time: new Date().toLocaleString(),
  });

  const options = {
    baseURL: `${KEYS.ENDPOINT}`,
    headers: {
      Authorization: `${KEYS.API_KEY}`,
    },
  };

  const getProduct = () => {
    axios
      .get(`/products/${id}`, options)
      .then((res) => {
        setProduct(res.data);
        console.log("product", product);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getStyles = () => {
    axios
      .get(`/products/${id}/styles`, options)
      .then((res) => {
        setStyles(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getReviews = () => {
    axios
      .get(`/reviews/?product_id=${id}`, options)
      .then((res) => {
        console.log("Styles Data", res);
        setReviews(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getReviewsMeta = () => {
    axios
      .get(`/reviews/meta?product_id=${id}`, options)
      .then((res) => {
        setMeta(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getQa = () => {
    axios
      .get(`qa/questions?product_id=${id}`, options)
      .then((res) => {
        console.log("QA after set", res.data.results);
        setQa(res.data.results);
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return {
    id,
    product,
    styles,
    reviews,
    meta,
    qa,
    cart,
    interactions,
    getProduct,
    getStyles,
    getReviews,
    getReviewsMeta,
    getQa,
  };
};
