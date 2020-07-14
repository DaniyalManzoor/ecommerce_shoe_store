import React from "react";
import { useParams } from "react-router-dom";
import data from "../../fakedata/fakesproducs.json";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import styles from "../home/home.module.css";

const ProductDetails = () => {
  const { slug } = useParams();
  const { name, img, desc, price } = data[slug];
  return (
    <div className={styles.detailscontainer}>
      <Card className={styles.card}>
        <CardMedia
          components="img"
          className={styles.media}
          image={img[0]}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
          <Typography variant="h5">{price}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
