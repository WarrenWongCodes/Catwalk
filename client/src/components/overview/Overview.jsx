import React, { useContext } from "react";
import { ProductContext, StylesContext } from "../../store.jsx";

export default function Overview() {
  const product = useContext(ProductContext);
  const styles = useContext(StylesContext);

  console.log("Overview Context from component", product.name);

  return (
    <div>
      <p>Test</p>
    </div>
  );
}
