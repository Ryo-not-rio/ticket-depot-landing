import React from "react";
import "../App.css";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
    h3: { fontSize: 12 },
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
  hr1: {
    display: "flex",
    margin: "8% 25%",
    backgroundColor: "#0d9116",
    borderColor: "#0d9116",
  },

  applogobox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#334756",
    width: "60%",
    height: "50%",
    borderRadius: "10%",
    display: "flex",
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
    marginTop: "8%",
    marginBottom: "8%",
    marginLeft: "5%",
    marginRight: "5%",
    alignItems: "center",
    textAlign: "center",
  },
});

function Privacy() {
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
            Privacy Policy
          </Typography>
        </div>
        <div className={classes.textbox}>
          <Typography
            variant="h3"
            className={classes.typography}
            style={{ display: "flex", textAlign: "left" }}
          >
            Please review this Privacy Policy, which sets out our policies
            regarding the collection, utilisation, and protection of the
            personal information of those using Ticket Depot. Personal
            information includes information that is attributable to a specific
            individual, such as name, address, telephone number, email address
            and credit card number. When using our web site/application, you are
            consenting to the practices set forth in this Privacy Policy.
            Children (persons under the age of 18) are not eligible to use the
            application unsupervised and we ask that children do not submit any
            personal information to us. If you are under the age of 18, you may
            only use this Application in conjunction with and under the
            supervision of your parents or guardians. In order to purchase
            tickets and related services through our application, essential
            personal information such as your name, your telephone number, your
            email address, and any additional information required for
            authenticating a purchase is required. If you are purchasing
            multiple tickets or buying tickets on behalf of others, please
            ensure that each of these other customers agrees, in advance, to the
            disclosure of their personal information to us. If you purchase
            ticket(s), your username may be provided to another user for the
            sole purpose of delivering the specific purchased product(s). The
            other user agrees to not use this information for any other
            purpose.The other user also agrees not to separately contact you at
            any time for any reason. Information you provide may also be
            provided to our partners to verify your compliance with any special
            conditions which might apply If you choose to become a registered
            customer of Ticket Depot, you must provide us with your name,
            address, telephone number, email address, a unique login name,
            password, and password validation. information is collected on the
            registration form for various reasons including: (i) for your
            personal identification; (ii) to complete reservations; (iii) to
            enable us and our partners to contact you for customer service
            purposes; (iv) to tailor the content of our application to meet our
            customer’s needs; (v) to share certain information with selected
            partners; (vi) to make any necessary product improvements to our
            application and (vii) to permit us or our partners to verify your
            compliance with any special conditions which might apply. Please
            note that we do request your email address to confirm your new
            client registration and each time you purchase a ticket via our
            application. Ticket Depot may share your personal information
            (excluding credit or bank card details) with certain selected Ticket
            Depot partners if you register with Ticket Depot or transact on a
            co-branded partner. If you opt in, these partners may use your
            personal information to contact you regarding related sites which
            they think may be of interest to you as a Ticket Depot customer.
            These partners will be based worldwide and by agreeing to this
            privacy policy, you are consenting to the transfer of your personal
            data to these selected partners regardless of where they are based.
            Generic information about your computer's connection to the
            Internet, called "session data", will automatically be logged. This
            information is anonymous and can not be used to track your personal
            information. Session data consists of things such as IP address,
            operating system and type of browser software being used and the
            activities conducted by the user while on our application. We
            collect session data because it helps us administer our application,
            track correlative information and to collate statistics in relation
            to visitor traffic. We may use your IP address to help us diagnose
            problems with our server. Rest assured that this information can not
            be linked to you personally. Any personal information that you
            provide us with such as your name and address etc. is neither
            gathered nor stored in the cookies placed by the Ticket Depot
            application and, as a result, your information will not be passed on
            to any third parties. As a Ticket Depot customer, you may opt in at
            any time to occasionally receive updates from us about ticket sales
            in your area, special offers, new Ticket Depot services, and other
            items that may be of interest to you via email, text messages, phone
            or post. Where previous indication of consent has been provided, it
            is possible for you to opt out at any time, in order to no longer
            receive these types of messages either through an opt out feature in
            the message or through your account settings. Your account settings
            are accessible on the Ticket Depot account page. If you opt in,
            Ticket Depot's partners may sell, rent or trade personal information
            (excluding credit or bank card details) to certain third parties. If
            you do not wish Ticket Depot's partners to pass on these details,
            please do not opt in, or if you have already opted in, use the opt
            out procedure as described in above paragraph. Our application has
            security features in place to protect against loss, misuse and
            alteration of the information under our control. All personal
            information you provide to Ticket Depot is transmitted using 128 bit
            Secure Server Software SSL (Secure Socket Layer) encryption. SSL is
            a proven coding system that allows your browser to automatically
            encrypt, or scramble, all of your personal data before you send it
            to us. It will not therefore be possible for your payment method
            data, name and address to be read as the information travels over
            the Internet. In addition, whenever you transact on Ticket Depot,
            you are protected by Ticket Depot’s guarantee. We do not sell, rent
            or trade your personal information to third parties for marketing
            purposes without your express consent. We may use third-party
            advertising companies, to serve or track ads on our web
            site/application and other web sites. These companies may use
            information (not including your name, address, email address or
            telephone number) about your visits to this and other web
            sites/applications in order to measure advertising effectiveness and
            to provide advertisements about goods and services that may be of
            interest to you. Please note that from time to time, Ticket Depot
            may transfer your personal and/or financial information to a related
            company or partner in order to improve our services or to help our
            security, credit risk or fraud protection activities. By submitting
            to us your details, you are providing consent to the transfer of
            your information for the purposes set out in this paragraph. Please
            acknowledge that any transfer of information will take place in
            accordance with this Privacy Policy and as permitted by law. In the
            event that Ticket Depot is sold, or transferred some of its assets
            to another party, our customer information will most likely also be
            transferred in connection with such acquisition. If your personal
            information is transferred, use of such information would remain
            subject to this Privacy Policy. Your personal information will be
            passed on to a successor in interest in the event of a liquidation
            or administration of Ticket Depot. You should be aware that in
            addition to the circumstances described above, Ticket Depot may
            disclose your financial or personal information if required to do so
            by law, court order, as requested by other government or law
            enforcement authority, or in the good faith belief that disclosure
            is otherwise necessary or advisable including, without limitation,
            to protect the rights or properties of Ticket Depot or its
            affiliated companies or when we have reason to believe that
            disclosing the information is necessary to identify, contact or
            bring legal action against someone who may be causing interference
            with our rights or properties, whether intentionally or otherwise,
            or when anyone else could be harmed by such activities. This policy
            is effective as of September 12th 2022. Any material changes in the
            way Ticket Depot uses personal information will be described in
            future versions of this Privacy Statement. If you have any concerns,
            you can write to us at: info@ticketdepot.co.uk
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
}

export default Privacy;
