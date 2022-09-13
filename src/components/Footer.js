import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  Button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20%",
    transition: "background .3s, borderColor .3s, color .3s",
    "&:hover": { backgroundColor: "#334756" },
    width: "5%",
    height: "100%",
  },
});

function Footer() {
  const classes = styles();
  return (
    <BottomNavigation
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#082032",
        width: "100%",
        height: "100%",
      }}
    >
      <Link to="/Terms" style={{ textDecoration: "none" }}>
        <Button className={classes.Button}>
          <Typography style={{ fontSize: 8, color: "#777777" }}>
            Ts&Cs
          </Typography>{" "}
        </Button>{" "}
      </Link>
      <Typography style={{ fontSize: 8, color: "#777777" }}>/</Typography>{" "}
      <Link to="/Privacy" style={{ textDecoration: "none" }}>
        <Button className={classes.Button}>
          <Typography style={{ fontSize: 8, color: "#777777" }}>
            Privacy Policy
          </Typography>{" "}
        </Button>
      </Link>
      <Button className={classes.Button}>
        <BottomNavigationAction
          label="Facebook"
          href="https://www.facebook.com/profile.php?id=100085265899240"
          icon={<FacebookIcon style={{ fill: "#3b5998" }} />}
        />
      </Button>
      <Button className={classes.Button}>
        <BottomNavigationAction
          label="Instagram"
          href="https://www.instagram.com/ticketdepot/"
          icon={<InstagramIcon style={{ fill: "#C13584" }} />}
        />
      </Button>
    </BottomNavigation>
  );
}
export default Footer;
