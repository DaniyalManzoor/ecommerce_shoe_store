import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import data from "../../fakedata/fakesproducs.json";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {Object.entries(data).map(([slug, { name, img, desc, price }]) => (
          <Grid container item xs={12} md={4} key={slug}>
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
              <CardActions>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
                <Link to={`/${slug}`} style={{ textDecoration: "none" }}>
                  details
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
