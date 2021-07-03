import React, { useEffect, useMemo } from 'react';
import Overview from './components/overview/Overview.jsx';
import Related from './components/related/Related.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import QA from './components/qa/QA.jsx';
import ReviewsList from './components/reviews/components/ReviewsList.jsx';
import Navbar from './components/common/Navbar/Navbar.jsx';

import {
  Store,
  IdContext,
  setId,
  ProductContext,
  StylesContext,
  RelatedContext,
  ReviewsContext,
  MetaContext,
  QaContext,
  CartContext,
  InteractionsContext,
} from './store.jsx';

export default function App(props) {
  const {
    id,
    setId,
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
  }, [id]);

  return (
    <main>
      <div>
        <Navbar />
        <ProductContext.Provider value={product}>
          <StylesContext.Provider value={styles}>
            <Overview />
          </StylesContext.Provider>
        </ProductContext.Provider>
        <RelatedContext.Provider value={related}>
          <ProductContext.Provider value={product}>
            <IdContext.Provider value={id}>
              <Related setId={setId} />
            </IdContext.Provider>
          </ProductContext.Provider>
        </RelatedContext.Provider>
        <QaContext.Provider value={{ qa, id, product }}>
          <QA />
        </QaContext.Provider>
        <ProductContext.Provider value={product}>
          <ReviewsContext.Provider value={reviews}>
            <MetaContext.Provider value={meta}>
              <Reviews />
            </MetaContext.Provider>
          </ReviewsContext.Provider>
        </ProductContext.Provider>
      </div>
    </main>
  );
}
