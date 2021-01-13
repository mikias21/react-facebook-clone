import React from "react";

// css
import "../styles/Sidebar.css";

// Component
import SidebarRow from "./SidebarRow";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

// Context API
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow title={user?.displayName} src={user?.photoURL} />
      <SidebarRow
        title="Covid-19 Information Center"
        Icon={LocalHospitalOutlinedIcon}
      />
      <SidebarRow title="Pages" Icon={FlagOutlinedIcon} />
      <SidebarRow title="Friends" Icon={PeopleAltOutlinedIcon} />
      <SidebarRow title="Messenger" Icon={ChatBubbleOutlineOutlinedIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontOutlinedIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryOutlinedIcon} />
      <SidebarRow title="More" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
