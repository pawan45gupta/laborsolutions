import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard({ product, showDescription, addToCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={product.name} />
      <CardMedia className={classes.media} image={product.imageUrl} title={product.Name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div>Price:{product?.price}</div>
          <div>
            <Button variant="outlined" color="primary" onClick={() => addToCart(product?.id)}>
              Add To Cart
            </Button>
          </div>
          {showDescription ? (
            product?.description
          ) : (
            <NavLink to={`/product/${product.id}`}>Click Here to view details</NavLink>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
