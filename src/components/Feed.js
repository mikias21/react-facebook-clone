import React, { useState, useEffect } from "react";

// css
import "../styles/Feed.css";

// Component
import Story from "./Story";
import MessageSender from "./MessageSender";
import Posts from "./Posts";

// Firebase
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("facebook")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <Story />
      <MessageSender />

      {posts.map((post) => (
        <Posts
          key={post.data?.id}
          profilePicture={post.data?.profile_pic}
          image={post.data?.image ? post.data?.image : ""}
          username={post.data?.name}
          timestamp={post.data?.timestamp}
          message={post.data?.message}
        />
      ))}

      {/* <Posts
        profilePicture="https://pbs.twimg.com/profile_images/1329685611200954368/6cOIKcku_400x400.jpg"
        image="https://pbs.twimg.com/media/EosMokIVQAExrPm?format=jpg&name=medium"
        username="Amanda Cerny"
        timestamp="12/12/12"
        message="BE YOUR OWN BOSS! New article out on @Forbes by @jeffconway"
      /> */}
      {/* <Posts
        profilePicture="https://pbs.twimg.com/profile_images/1329685611200954368/6cOIKcku_400x400.jpg"
        username="Amanda Cerny"
        timestamp="12/12/12"
        message="BE YOUR OWN BOSS! New article out on @Forbes by @jeffconway"
      />
      <Posts
        profilePicture="https://pbs.twimg.com/profile_images/1329685611200954368/6cOIKcku_400x400.jpg"
        image="https://pbs.twimg.com/media/EosMokIVQAExrPm?format=jpg&name=medium"
        username="Amanda Cerny"
        timestamp="12/12/12"
        message="BE YOUR OWN BOSS! New article out on @Forbes by @jeffconway"
      /> */}
    </div>
  );
}

export default Feed;
