import React, { useState } from "react";
import Button from "../button/button.component";
import classes from "./musicCard.module.css";

const MusicCard = (props) => {
  const share = (title) => {
    // this is the complete list of currently supported params you can pass to the plugin (all optional)
    var options = {
      message: `Check out this song: ${title}!`, // not supported on some apps (Facebook, Instagram)
      subject: title, // fi. for email
    };

    var onSuccess = function (result) {
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
      console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function (msg) {
      console.log("Sharing failed with message: " + msg);
    };
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
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
              share(props.title);
            }}
            text="Share"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
