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
import AppSlightBorders from "../AppSlightBorders.png";
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
  },
  hr: {
    display: "flex",
    margin: "0 1rem",
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
});

function Contact() {
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
            Contact
          </Typography>
        </div>
        <div className={classes.textbox}>
          <Typography className={classes.typography}>
            Email: info@ticketdepot.co.uk
            <br />
            <br />
            Instagram: @ticketdepot
            <br />
            <br />
            Facebook: Ticket Depot
          </Typography>
        </div>

        <DownloadButtons />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "8%",
            marginBottom: "8%",
          }}
        >
          <div className={classes.applogobox}>
            <img
              style={{ width: "70%", marginTop: "8%", marginBottom: "8%" }}
              src={AppSlightBorders}
              alt=""
            />
          </div>
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
}

export default Contact;
