import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index.actions";
import classes from "./musicDetail.module.css";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";

const MusicDetail = (props) => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music);
  const { id } = useParams();
  const song = useSelector((state) => (state.music ? state.music[id] : null));
  const onFetchMusic = () => dispatch(actions.fetchMusic());
  const deleteSongAction = (songId) => dispatch(actions.deleteSong(songId));

  useEffect(() => {
    if (!music) {
      onFetchMusic();
    }
  });

  const deleteSong = () => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      deleteSongAction(song.id);
      props.history.push("/");
    }
  };

  const shareSong = () => {
    console.log("sharing");
  };

  let content;
  if (music) {
    if (!song) {
      props.history.push("/");
    } else {
      const albumUrl =
        song.image.split("/")[0] === "uploads"
          ? "https://dry-temple-37388.herokuapp.com/" + song.image
          : song.image;

      content = (
        <div className={classes.DetailContainer}>
          <div className={classes.ImageContainer}>
            <img className={classes.Image} src={albumUrl} alt="album cover" />
          </div>
          <div className={classes.Content}>
            <div className={classes.Title}>{song.title}</div>
            <div className={classes.Artist}>{song.artist}</div>
            <div className={classes.Info}>
              {song.genre} | {song.year}
            </div>
          </div>
          <div className={classes.Actions}>
            <Button onclick={deleteSong} text="delete" />
            <Button onclick={shareSong} text="share" />
          </div>
        </div>
      );
    }
  } else {
    content = <div>loading</div>;
  }

  return <div className={classes.OverviewContainer}>{content}</div>;
};

export default MusicDetail;
