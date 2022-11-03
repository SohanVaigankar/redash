import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

// material icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/PeopleAlt";
import ProductsIcon from "@mui/icons-material/Store";
import OrdersIcon from "@mui/icons-material/ShoppingCart";
import DeliveryIcon from "@mui/icons-material/LocalShipping";
import StatsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SystemHealthIcon from "@mui/icons-material/MonitorHeart";
import LogsIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AdminPanel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SERVICES</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <UsersIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductsIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <OrdersIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <DeliveryIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">UPDATES</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <StatsIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <p className="title">UTILITY</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SystemHealthIcon className="icon" />
              <span>System Health</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <LogsIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <ProfileIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <p className="bottom-title">THEMES</p>
      <div className="bottom">
        <div className="theme-option"></div>
        <div className="theme-option"></div>
        <div className="theme-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;