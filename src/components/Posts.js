import React from "react";

// Material UI
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// css
import "../styles/Posts.css";

function Posts({ profilePicture, image, username, timestamp, message }) {
  return (
    <div className="posts">
      <div className="posts__top">
        <Avatar src={profilePicture} className="posts__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="posts__bottom">
        <p>{message}</p>
      </div>

      <div className="posts__image">
        {!image ? "" : <img src={image} alt="POST_IMAGE" />}
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <ExpandMoreIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Posts;
