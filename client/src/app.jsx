import React, { useState, useEffect, useLayoutEffect } from "react";
import KEYS from "/config.js";
import axios from "axios";

export default function App(props) {
  //ID
  const [id, setId] = useState(11002);
  // Product
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  // Reviews
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});
  // Questions
  const [qa, setQa] = useState([]);
  // Answers
  const [answers, setAnswers] = useState([]);
  // Cart
  const [cart, setCart] = useState([]);
  //Interaction
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

  // Get product from URL ID
  const getProduct = () => {
    axios
      .get(`/products/${id}`, options)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Get Styles from Product ID
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

  //Get Reviews Results
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

  // Get Reviews Meta Data
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

  // Get List of Questions
  const getQa = () => {
    axios
      .get(`qa/questions?product_id=${id}`, options)
      .then((res) => {
        console.log("QA Data", res.data.results);
        setQa(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Get List of Answers
  // Need Question ID
  const getAnswers = () => {
    axios
      .get(`qa/questions/${qa.question_id}/answers`, options)
      .then((res) => {
        console.log("Answer Data", res);
        setQa(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Axios to get product information
  useEffect(() => {
    getProduct();
    getStyles();
    getReviewsMeta();
    getReviews();
    getQa();
    getAnswers();
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <main>
      <header>
        <h1>{product.name}</h1>
      </header>
    </main>
  );
}

//   // Axios to get Reviews

//   // Axios to get Questions and Answers

//   // Axios to get cart
