import React from "react";

// css
import "../styles/SingleStory.css";

// Material UI
import { Avatar } from "@material-ui/core";

function SingleStory({ img, profile, title }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="singleStory">
      <Avatar src={profile} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default SingleStory;
