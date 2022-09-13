import React from "react";
import "./App.css";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { mdiCashMultiple } from "@mdi/js";
import { mdiAlertCircle } from "@mdi/js";
import { mdiCheckboxBlankCircleOutline } from "@mdi/js";
import { mdiCheckDecagram } from "@mdi/js";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DownloadButtons from "./components/DownloadButtons";
import AppSlightBorders from "./AppSlightBorders.png";

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
    background: "linear-gradient(0deg, rgba(1,100,120,0.5),transparent)",
    backgroundColor: "#082032",
  },
  hr: {
    display: "flex",
    margin: "0 0",
    backgroundColor: "#e3e3e3",
  },
  hr1: {
    display: "flex",
    margin: "0 35%",
    backgroundColor: "#0d9116",
    borderColor: "#0d9116",
  },

  applogobox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#334756",
    width: "50%",
    height: "40%",
    borderRadius: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "5px",
    border: "5px solid",
    borderColor: "#0d9116",
    marginTop: "8%",
    marginBottom: "8%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    marginTop: "8%",
    marginBottom: "8%",
  },
  link: {
    color: "#e3e3e3",
    textDecoration: "none",
  },
  li: {
    textAlign: "center",
    textDecoration: "none",
    listStyle: "none",
    color: "#e3e3e3",
  },
  textbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    backgroundColor: "red",
  },
});

function App() {
  const classes = styles();
  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <hr className={classes.hr} />
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
        <hr className={classes.hr1} />
        <div
          className={classes.textbox}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Icon
            path={mdiCartOutline}
            color={"#e0c99d"}
            size={"10%"}
            className={classes.icon}
          />
          <Typography className={classes.li} variant="h4">
            Buy Tickets f
          </Typography>
        </div>
        <hr className={classes.hr1} />
        <div
          className={classes.textbox}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Icon
            path={mdiCashMultiple}
            color={"#e0c99d"}
            size={"10%"}
            className={classes.icon}
          />
          <Typography className={classes.li} variant="h4">
            Sell Tickets
          </Typography>
        </div>
        <hr className={classes.hr1} />
        <div
          className={classes.textbox}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon path={mdiAlertCircle} color={"#e65e5e"} size={"7%"} />
            <Icon
              path={mdiCheckboxBlankCircleOutline}
              color={"#0d9116"}
              size={"7%"}
            />
            <Icon path={mdiCheckDecagram} color={"#4db4eb"} size={"7%"} />
          </div>
          <Typography className={classes.li} variant="h4">
            User Rating System
          </Typography>
        </div>

        <hr className={classes.hr1} />
        <DownloadButtons />

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

export default App;
