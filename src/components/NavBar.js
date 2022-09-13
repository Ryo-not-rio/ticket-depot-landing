import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import LogoFinalnoBground from "../LogoFinalnoBground.png";

const styles = makeStyles({
  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  nav: {
    fontFamily: ["Goldman"],
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  ul: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
    padding: "10px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor:"#082032"
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#e3e3e3",
    textDecoration: "none",
    fontSize: 13,
  },
  Button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20%",
    transition: "background .3s, borderColor .3s, color .3s",
    "&:hover": { backgroundColor: "#334756" },
    width: "100%",
  },
});

function NavBar() {
  const classes = styles();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor:"#082032",
        
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <Link to="/">
          <img className={classes.logo} src={LogoFinalnoBground} alt="" />
        </Link>
      </div>
      <nav style={{ backgroundColor: "#082032" }} className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Button className={classes.Button}>
              <Link className={classes.link} to="/About">
                About
              </Link>
            </Button>
          </li>
          <li className={classes.li}>
            <Button className={classes.Button}>
              <Link className={classes.link} to="/Contact">
                Contact
              </Link>
            </Button>
          </li>
          <li className={classes.li}>
            <Button className={classes.Button}>
              <Link
                style={{ color: "#0d9116" }}
                className={classes.link}
                to="/Download"
              >
                Download
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
