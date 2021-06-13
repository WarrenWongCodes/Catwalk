import React, { useContext, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { RelatedContext } from "../../store.jsx";
import CardComponent from "../related/components/Card.jsx";
import "./styles/style.css";

export default function Related() {
  const related = useContext(RelatedContext);

  return (
    <>
      <div>
        <h4>Related Products</h4>
        <p>Related Product Names:</p>
        {/* <Card.Group>
          {related.map((item) => {
            return <CardComponent key={item.data.id} product={item.data} />;
          })}
        </Card.Group> */}
        <div className="cards">
          {related.map((item) => {
            return <CardComponent key={item.data.id} product={item.data} />;
          })}
        </div>
      </div>
    </>
  );
}
