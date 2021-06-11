import React, { useEffect } from "react";

import Overview from "./components/overview/Overview.jsx";
import Related from "./components/related/Related.jsx";
// import Reviews from "./components/reviews/Reviews.jsx";
import QA from "./components/qa/QA.jsx";
import ReviewsList from "./components/reviews/components/ReviewsList.jsx";

// import './App.css'

import {
  Store,
  IdContext,
  ProductContext,
  StylesContext,
  RelatedContext,
  RelatedImagesContext,
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
    relatedImages,
    reviews,
    meta,
    qa,
    cart,
    interactions,
    getProduct,
    getStyles,
    getRelated,
    getRelatedImages,
    getReviews,
    getReviewsMeta,
    getQa,
  } = Store();

  useEffect(() => {
    getProduct();
    getStyles();
    getRelated();
    getRelatedImages();
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
        {/* <ProductContext.Provider value={product}>
          <StylesContext.Provider value={styles}>
            <Overview />
            <ReviewsContext.Provider value={reviews}>
              <ReviewsList />
            </ReviewsContext.Provider>
          </StylesContext.Provider>
        </ProductContext.Provider> */}
        <RelatedContext.Provider value={related}>
          <StylesContext.Provider value={styles}>
            <RelatedImagesContext.Provider value={relatedImages}>
              <Related />
            </RelatedImagesContext.Provider>
          </StylesContext.Provider>
        </RelatedContext.Provider>
        {/* <QaContext.Provider value={qa}>
          <QA />
        </QaContext.Provider> */}
      </div>
    </main>
  );
}
