import React from "react";
import "./Topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="searchBar">
          <input type="text" placeholder="Search Customer" />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
        <AddIcon className="addButton" />
      </div>
      <div className="topbarRight">
      <NotificationsActiveIcon className="topLeftIcon"/>
      <HelpOutlineIcon className="topRightIcon"/>
      <Avatar className="avatar">KP</Avatar>
      </div>
    </div>
  );
};

export default Topbar;
