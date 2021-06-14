import React, { useState, createContext } from "react";
import KEYS from "../../config.js";
import axios from "axios";

export const IdContext = React.createContext();
export const ProductContext = React.createContext();
export const StylesContext = React.createContext();
export const RelatedContext = React.createContext();
export const ReviewsContext = React.createContext();
export const MetaContext = React.createContext();
export const QaContext = React.createContext();
export const CartContext = React.createContext();
export const InteractionsContext = React.createContext();

export const Store = () => {
  const [id, setId] = useState(11003);
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
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
        // console.log("product", product);
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

  const getRelated = () => {
    axios
      .get(`/products/${id}/related`, options)
      .then((res) => {
        // console.log("Response from related", res);
        axios
          .all(res.data.map((id) => axios.get(`/products/${id}`, options)))
          .then(
            axios.spread(function (...res) {
              setRelated(res);
            })
          );
      })
      .catch((error) => {
        console.error("Error getting Related Products ID: ", error);
      });
  };

  const getReviews = () => {
    axios
      .get(`/reviews/?product_id=${id}`, options)
      .then((res) => {
        // console.log("Styles Data", res);
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
        // console.log("QA after set", res.data.results);
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
    related,
    reviews,
    meta,
    qa,
    cart,
    interactions,
    getProduct,
    getStyles,
    getRelated,
    getReviews,
    getReviewsMeta,
    getQa,
  };
};
