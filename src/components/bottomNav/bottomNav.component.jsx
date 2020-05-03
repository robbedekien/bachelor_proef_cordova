import React, { useEffect } from "react";
import classes from "./bottomNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlus } from "@fortawesome/free-solid-svg-icons";

const BottomNav = (props) => {
  let redirect;

  useEffect(() => {
    props.history.push("/");
  }, [props.history]);

  const navigate = (url) => {
    props.history.push(url);
  };

  return (
    <div className={classes.bottomNav}>
      {redirect}
      <div className={classes.navItem} onClick={() => navigate("/")}>
        <FontAwesomeIcon size="2x" icon={faMusic} color="#ff2956" />
        music
      </div>
      <div className={classes.navItem} onClick={() => navigate("/add")}>
        <FontAwesomeIcon size="2x" icon={faPlus} color="#ff2956" />
        add
      </div>
    </div>
  );
};

export default BottomNav;
