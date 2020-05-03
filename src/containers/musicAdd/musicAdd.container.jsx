import React, { useState } from "react";
import Button from "../../components/button/button.component";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index.actions";

import classes from "./musicAdd.module.css";

const MusicAdd = (props) => {
  const dispatch = useDispatch();
  const addSongAction = (formData) => dispatch(actions.addSong(formData));

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(2020);
  const [imageUrl, setImageUrl] = useState(
    "https://via.placeholder.com/1000x1000?text=Placeholder"
  );
  const [image, setImage] = useState();

  const formSubmitHandler = () => {
    let formData = new FormData();
    formData.set("title", title);
    formData.set("artist", artist);
    formData.set("genre", genre);
    formData.set("year", year);
    formData.append("album", image);
    addSongAction(formData);
    props.history.push("/");
  };

  const handleChange = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className={classes.Container}>
      <form className={classes.Form} onSubmit={formSubmitHandler}>
        <div className={classes.ImageContainer}>
          <img className={classes.Image} src={imageUrl} alt="album cover" />
        </div>
        <div className={classes["upload-btn-wrapper"]}>
          <Button type="button" text="Upload Image" />
          <input type="file" name="album" onChange={handleChange} />
        </div>

        <label className={classes.Label} htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.Input}
          />
        </label>

        <label className={classes.Label} htmlFor="artist">
          Artist
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className={classes.Input}
          />
        </label>

        <label className={classes.Label} htmlFor="genre">
          Genre
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className={classes.Input}
          />
        </label>

        <label className={classes.Label} htmlFor="year">
          Year
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={classes.Input}
          />
        </label>

        <div className={classes.Submit}>
          <Button type="submit" text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default MusicAdd;
