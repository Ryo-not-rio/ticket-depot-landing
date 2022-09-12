import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import LogoFinalnoBground from "../LogoFinalnoBground.png";

const styles = makeStyles({
  li: { display: "flex", margin: "0 1rem" },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    marginRight: "0.5rem",
    fontFamily: ["Goldman"],
  },
  ul: {
    display: "flex",
    margin: "25px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  link: {
    color: "#e3e3e3",
    textDecoration: "none",
    listStyle: "none",
  },
  togglebutton: {
    position: "absolute",
    top: "0.75rem",
    right: "2rem",
    display: "none",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    width: "31px",
    height: "21px",
  },
  span: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e3e3e3",
    borderRadius: "10px",
    borderTop: "10px",
    borderBottom: "1px",
  },
});

function NavBar() {
  const classes = styles();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          flexDirection: "row",

          width: "25%",
          marginLeft: "1rem",
          marginBottom: "-3.5rem",
        }}
      >
        <img className={classes.logo} src={LogoFinalnoBground} alt=""/>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/About">
              About
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/Contact">
              Contact
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              style={{ color: "#0d9116" }}
              className={classes.link}
              to="/Download"
            >
              Download
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
