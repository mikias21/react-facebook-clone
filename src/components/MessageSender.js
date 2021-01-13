import React, { useState } from "react";

// css
import "../styles/MessageSender.css";

// Material UI
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";

// Context API
import { useStateValue } from "../StateProvider";

// Firebase
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [file, setFile] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("facebook").add({
      image: file,
      message: input,
      name: user.displayName,
      profile_pic: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    setFile("");
  };

  console.log(input);

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user?.photoURL} />
        <form>
          <input
            value={input}
            className="messageSender__input"
            placeholder={`what's on your mind ${user?.displayName}?`}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            value={file}
            placeholder="image URL (Optional)"
            onChange={(e) => setFile(e.target.value)}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryOutlinedIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <SentimentSatisfiedOutlinedIcon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
