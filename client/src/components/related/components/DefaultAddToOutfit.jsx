import React from "react";
import Styles from "../related.module.css";

// console.log(star);

export default function AddOutfitCard({ product, style }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardDefaultHeader}>
        <img
          src="https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
          alt="addOutfit"
        />
      </div>
      <div className={Styles.cardBody}>
        <br></br>
        <br></br>
        <br></br>
        <h2
          style={{ textAlignVertical: "center", textAlign: "center" }}
          className={Styles.title}
        >
          Add {product.name} to your outfit
        </h2>
        <div className={Styles.user}></div>
      </div>
    </div>
  );
}
