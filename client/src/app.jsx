import React, { useState, useEffect } from "react";
import { Store } from "./store.jsx";

export default function App(props) {
  const {
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
  } = Store();

  useEffect(() => {
    getProduct();
    getStyles();
    getReviewsMeta();
    getReviews();
    getQa();
  }, []);

  return (
    <main>
      <header>
        <h1>{product.name}</h1>
      </header>
    </main>
  );
}
