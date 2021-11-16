import SpeedIcon from '@material-ui/icons/Speed';
import RedeemIcon from '@material-ui/icons/Redeem';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PaymentIcon from "@material-ui/icons/Payment";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from "@material-ui/icons/Settings";

import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const adminNavs = [
    {
      logo: <SpeedIcon style={{ marginRight: 15 }} />,
      text: "Dashboard",
      link: "/",
    },
    {
      logo: <PeopleOutlineIcon style={{ marginRight: 15 }} />,
      text: "Customer",
      link: "/customer",
    },
    {
      logo: <RedeemIcon style={{ marginRight: 15 }} />,
      text: "Product",
      link: "/",
    },
    {
      logo: <FormatListBulletedIcon style={{ marginRight: 15 }} />,
      text: "Estimate",
      link: "/",
    },
    {
      logo: <EventNoteIcon style={{ marginRight: 15 }} />,
      text: "Invoice",
      link: "/",
    },
    {
      logo: <PaymentIcon style={{ marginRight: 15 }} />,
      text: "Payment Plan",
      link: "/",
    },
    {
      logo: <SubscriptionsIcon style={{ marginRight: 15 }} />,
      text: "Subscription",
      link: "/",
    },
    {
      logo: <EventIcon style={{ marginRight: 15 }} />,
      text: "Payment",
      link: "/",
    },
    {
      logo: <AssignmentIcon style={{ marginRight: 15 }} />,
      text: "Report",
      link: "/",
    },
    {
      logo: <SettingsIcon style={{ marginRight: 15 }} />,
      text: "Setting",
      link: "/",
    },
  ];
  return (
    <div className="sidebar">
     <div style={{marginTop: 40, marginLeft: "2rem"}}>
          <h1>
            CORE <label className="brandLabel">X</label> Books
          </h1>
     </div>

      <div className="dashboard_navwrapper">
        {adminNavs.map((nav, i) => (
          <div className="dashboard_navitem" key={i}>
            {nav.logo} <Link to={nav.link} className="navItem">{nav.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
