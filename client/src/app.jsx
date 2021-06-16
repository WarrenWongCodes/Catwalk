import React, { useEffect, useMemo } from "react";

import Overview from "./components/overview/Overview.jsx";
import Related from "./components/related/Related.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
import QA from "./components/qa/QA.jsx";
import ReviewsList from "./components/reviews/components/ReviewsList.jsx";
import Navbar from "./components/common/Navbar/Navbar.jsx";

import {
  Store,
  IdContext,
  ProductContext,
  StylesContext,
  RelatedContext,
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
  } = Store();

  useEffect(() => {
    getProduct();
    getStyles();
    getRelated();
    getReviewsMeta();
    getReviews();
    getQa();
  }, []);

  return (
    <main>
      <div>
        {/* <Navbar />
        <ProductContext.Provider value={product}>
          <StylesContext.Provider value={styles}>
            <Overview />
          </StylesContext.Provider>
        </ProductContext.Provider> */}
        <RelatedContext.Provider value={related}>
          <ProductContext.Provider value={product}>
            <Related />
          </ProductContext.Provider>
        </RelatedContext.Provider>
        {/* <QaContext.Provider value={qa}>
          <QA />
        </QaContext.Provider>
        <ReviewsContext.Provider value={reviews}>
          <MetaContext.Provider value={meta}>
            <Reviews />
          </MetaContext.Provider>
        </ReviewsContext.Provider> */}
      </div>
    </main>
  );
}
