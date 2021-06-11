import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import {
  RelatedContext,
  StylesContext,
  RelatedImagesContext,
} from "../../store.jsx";
import CardComponent from "../related/components/Card.jsx";

export default function Related() {
  const related = useContext(RelatedContext);
  const styles = useContext(StylesContext);
  const images = useContext(RelatedImagesContext);

  return (
    <>
      <div>
        <h4>Related Products</h4>
        <p>Related Product Names:</p>
        <Grid>
          {related.map((item) => {
            return <CardComponent key={item.data.id} product={item.data} />;
          })}
        </Grid>
      </div>
    </>
  );
}
