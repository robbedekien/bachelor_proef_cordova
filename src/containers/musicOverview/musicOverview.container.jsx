import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index.actions";
import MusicCard from "../../components/musicCard/musicCard.component";
import classes from "./musicOverview.module.css";

const MusicOverview = (props) => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music);
  const onFetchMusic = () => dispatch(actions.fetchMusic());

  useEffect(() => {
    if (!music) {
      onFetchMusic();
    }
  });

  const songs = () => {
    let songs = [];
    let songKeys = Object.keys(music);
    songKeys.forEach((key) => {
      songs.push(music[key]);
    });
    return songs;
  };

  let content;
  if (music) {
    content = songs().map((song) => {
      return (
        <MusicCard
          key={song.id}
          image={song.image}
          title={song.title}
          artist={song.artist}
          genre={song.genre}
          year={song.year}
          className={classes.Card}
          onclick={() => {
            props.history.push("/detail/" + song.id);
          }}
        />
      );
    });
  } else {
    content = "loading";
  }
  return <div className={classes.OverviewContainer}>{content}</div>;
};

export default MusicOverview;
