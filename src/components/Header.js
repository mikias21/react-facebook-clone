import React from "react";

// Css
import "../styles/Header.css";

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AddOutlined,
  ExpandMore,
  ForumOutlined,
  NotificationsActiveOutlined,
} from "@material-ui/icons";

// Context API
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="FACEBOOK_LOGO"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      {/* middle */}
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlinedIcon fontSize="large" />
        </div>
      </div>
      {/* right */}
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user?.photoURL} />
          <h4>{user?.displayName}</h4>
        </div>

        <IconButton>
          <AddOutlined />
        </IconButton>
        <IconButton>
          <ForumOutlined />
        </IconButton>
        <IconButton>
          <NotificationsActiveOutlined />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
