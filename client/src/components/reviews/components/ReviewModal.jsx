import React from 'react';
import ReactDom from 'react-dom';
import { Container, Divider, Comment } from "semantic-ui-react";
import styles from '../styles/ReviewModals.module.css';

const { modalStyles, overlayStyles } = styles;

export default function ReviewModal({ open, children, closeModal }) {
  if (!open) {
    return null
  }
  return ReactDom.createPortal(
    <>
      <div className={ overlayStyles }>
        <div className={ modalStyles }>
          <button onClick={ closeModal } > Close Modal</button>
          { children }
        </div>
        <br />
      </div>
    </>,
    document.getElementById('reviewPortal')
  );
};