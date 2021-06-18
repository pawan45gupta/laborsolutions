import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
import PopupState, { bindPopper, bindHover } from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    width: "100%",
  },
}));

export default function PopperPopupState({ product, addToCart }) {
  const classes = useStyles();

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Typography {...bindHover(popupState)}>
            <Card product={product} addToCart={addToCart}></Card>
          </Typography>
          <Popper {...bindPopper(popupState)} placement={"right"} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography className={classes.typography}>
                    <Card product={product} showDescription {...bindHover(popupState)}></Card>
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
