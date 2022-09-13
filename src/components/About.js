import React from "react";
import "../App.css";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DownloadButtons from "../components/DownloadButtons";
import { Typography } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#082032",
    },
    secondary: {
      main: "#334756",
    },
  },
  typography: {
    fontFamily: ["Goldman"],
    h4: {
      fontWeight: 400,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  app: {
    overflow: "scroll",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#082032",
    background: "linear-gradient(0deg, rgba(1,100,120,0.5),transparent)",
  },
  hr: {
    display: "flex",
    margin: "0 0",
    backgroundColor: "#e3e3e3",
  },

  applogobox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#334756",
    width: "60%",
    height: "50%",
    borderRadius: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "5px",
    border: "5px solid",
    borderColor: "#0d9116",
    marginTop: "8%",
    marginBottom: "8%",
  },
  li: {
    textAlign: "center",
    textDecoration: "none",
    listStyle: "none",
    color: "#e0c99d",
  },
  link: {
    color: "#e3e3e3",
    textDecoration: "none",
  },
  typography: { color: "#e3e3e3" },
  textbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
    marginBottom: "8%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center",
  },
  hr1: {
    display: "flex",
    margin: "8% 25%",
    backgroundColor: "#0d9116",
    borderColor: "#0d9116",
  },
});

const About = () => {
  const classes = styles();
  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <hr className={classes.hr} />
        <div className={classes.textbox}>
          <Typography
            style={{ color: "#e0c99d" }}
            variant="h4"
            className={classes.typography}
          >
            About
          </Typography>
        </div>

        <div className={classes.textbox}>
          <Typography className={classes.typography}>
            We aim to provide a scam-proof secondary marketplace for small
            scale, ticketed events.
            <hr className={classes.hr1} />
            By employing a multi-layered verification system, we try to ensure
            the ticket you buy is valid.
          </Typography>
        </div>
        <hr className={classes.hr1} />
        <div className={classes.li}>
          <Typography variant="h5">Phone verification</Typography>
          <br />
          <Typography variant="h5">Email verifiaction</Typography>
          <br />
          <Typography variant="h5">QR code verification</Typography>
          <br />
          <Typography variant="h5">User rating system</Typography>
        </div>

        <DownloadButtons />
        <hr className={classes.hr1} />
        <div className={classes.textbox}>
          <Typography className={classes.typography}>
            Just download the app and sign up to start selling and/or buying
            tickets!
            <br />
            <hr className={classes.hr1} />A much easier way to find unwanted
            tickets than scouring social media endlessly and getting scammed.
          </Typography>
        </div>
        <hr className={classes.hr} />
        <div
          style={{
            position: "absolute",
            justifyContent: "bottom",
            alignItems: "bottom",
            left: 0,
            right: 0,
          }}
        >
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default About;
