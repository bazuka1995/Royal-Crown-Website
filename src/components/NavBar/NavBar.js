import React from "react";
import classes from "./NavBar.module.css";
import logo from "./../../assets/logo.png"

const navbar = (props) => {
  return (
    <div className={classes.NavBar}>
      <ul className={classes.NavMenu}>
        <a className={classes.NavItem} href="http://royalcrown.com.au/">About Us</a>

        <a className={classes.NavItem} href="http://royalcrown.com.au/">Commercial</a>

        <a className={classes.NavItem} href="http://royalcrown.com.au/">Industrial</a>

        <img src={logo} alt="Royal Crown Logo" width="50" height="50"/>

        <a className={classes.NavItem} href="http://royalcrown.com.au/">Residential</a>

        <a className={classes.NavItem} href="http://royalcrown.com.au/">Tenants</a>

        <a className={classes.NavItem} href="http://royalcrown.com.au/">Contact Us</a>
      </ul>
    </div>
  );
};

export default navbar;
