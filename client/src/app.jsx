import React, { useEffect } from "react";

import Overview from "./components/overview/Overview.jsx";
import ReviewsList from "./components/reviews/components/ReviewsList.jsx";
import StarRating from "./components/reviews/components/ReviewsList.jsx";
import AveRatingDisp from './components/reviews/components/Averagerating.jsx'
// import Related from "./components/related/Related.jsx";
// import StarRating from "./components/reviews/components/StarRatings.jsx";
// import QA from "./components/qa/QA.jsx"

// import './App.css'

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
            <ReviewsContext.Provider value={reviews}>
              <ReviewsList />
            </ReviewsContext.Provider>
          </StylesContext.Provider>
        </ProductContext.Provider>
      </div>
    </main>
  );
}
