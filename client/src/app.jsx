import React, { useEffect } from "react";

import Overview from "./components/overview/Overview.jsx";
// import Related from "./components/related/Related.jsx";
// import Reviews from "./components/reviews/Reviews.jsx";
// import QA from "./components/qa/QA.jsx"

import {
  Store,
  IdContext,
  ProductContext,
  StylesContext,
  ReviewsContext,
  MetaContext,
  QaContext,
  CartContext,
  InteractionsContext,
} from "./store.jsx";

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
      <div>
        <ProductContext.Provider value={product}>
          <StylesContext.Provider value={styles}>
            <Overview />
          </StylesContext.Provider>
        </ProductContext.Provider>
      </div>
    </main>
  );
}
