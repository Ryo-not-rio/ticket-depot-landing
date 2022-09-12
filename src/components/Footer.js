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
import {
  createTheme,
} from "@material-ui/core/styles";


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

function Footer() {
  return (
    <BottomNavigation
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#082032",
      }}
    >
      <BottomNavigationAction
        label="Facebook"
        href="https://www.facebook.com/profile.php?id=100085265899240"
        icon={<FacebookIcon style={{ fill: "#3b5998" }} />}
      />

      <Link to="/Terms">
        <Button>
          <Typography style={{ fontSize: 10 }}>Ts&Cs</Typography>{" "}
        </Button>{" "}
      </Link>
      <Link to="/Privacy">
        <Button>
          <Typography style={{ fontSize: 10 }}>Privacy Policy</Typography>{" "}
        </Button>
      </Link>

      <BottomNavigationAction
        label="Instagram"
        href="https://www.instagram.com/ticketdepot/"
        icon={<InstagramIcon style={{ fill: "#C13584" }} />}
      />
    </BottomNavigation>
  );
}
export default Footer;
