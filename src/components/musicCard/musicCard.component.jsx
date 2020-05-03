import React, { useState } from "react";
import Button from "../button/button.component";
import classes from "./musicCard.module.css";

const MusicCard = (props) => {
  const share = () => {
    console.log("sharing");
  };

  const albumUrl =
    props.image.split("/")[0] === "uploads"
      ? "https://dry-temple-37388.herokuapp.com/" + props.image
      : props.image;

  return (
    <div
      className={classes.CardContainer}
      onClick={() => {
        props.onclick();
      }}
    >
      <div className={classes.ImageContainer}>
        <img className={classes.Image} src={albumUrl} alt="Song" />
      </div>
      <div className={classes.Content}>
        <h1 className={classes.Title}>{props.title}</h1>
        <h2 className={classes.Artist}>{props.artist}</h2>
        <h3 className={classes.Info}>
          {props.genre} | {props.year}
        </h3>
        <div className={classes.Share}>
          <Button
            onclick={(e) => {
              e.stopPropagation();
              share();
            }}
            text="Share"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
