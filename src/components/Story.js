import React from "react";

// css
import "../styles/Story.css";

// component
import SingleStory from "./SingleStory";

function Story() {
  return (
    <div className="story">
      <SingleStory
        img="https://pbs.twimg.com/media/ErDhZvlXMAI_HtP?format=jpg&name=large"
        profile="https://pbs.twimg.com/profile_images/1329685611200954368/6cOIKcku_400x400.jpg"
        title="Amanda Cerny"
      />
      <SingleStory
        img="https://pbs.twimg.com/media/ErdeO4oUYAEiFOj?format=png&name=small"
        profile="https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Elon Musk"
      />
      <SingleStory
        img="https://images.pexels.com/photos/4068072/pexels-photo-4068072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profile="https://images.pexels.com/photos/4617822/pexels-photo-4617822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Jennfer Gorge"
      />
      <SingleStory
        img="https://images.pexels.com/photos/5717749/pexels-photo-5717749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profile="https://images.pexels.com/photos/2505319/pexels-photo-2505319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Ana Hernadez"
      />
      <SingleStory
        img="https://images.pexels.com/photos/4626684/pexels-photo-4626684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profile="https://images.pexels.com/photos/2801579/pexels-photo-2801579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Amanda Cerny"
      />
    </div>
  );
}

export default Story;
