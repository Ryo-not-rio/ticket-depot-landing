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
    background: "linear-gradient(0deg, rgba(1,100,120,0.5),transparent)",
  },
  hr: {
    display: "flex",
    margin: "0 0",
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

function Terms() {
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
            Terms and Conditions
          </Typography>
        </div>
        <div className={classes.textbox} style={{ color: "#777777" }}>
          <Typography
            variant="h3"
            className={classes.typography}
            style={{ display: "flex", textAlign: "left" }}
          >
            1.1 Introduction. Welcome to Ticket Depot's online ticket exchange
            (the "Application"). These Terms and Conditions (including any
            documents referred to in it) ("Agreement") list the terms of the
            agreement between you ("You") and Ticket Depot ("Ticket Depot" or
            "We" or "Us") for the buying and selling of tickets ("Tickets"), and
            all other services that We provide (the "Services"). By using our
            Site, You agree to accept this Agreement. 1.2 Ticketing Exchange.
            Ticket Depot provides a service that allows users who want to buy
            tickets ("Buyers") to find users who want to sell tickets
            ("Sellers"). Ticket Depot does not take title to the underlying
            ticket (to the extent such title exists), and the actual
            transactions are between the Buyers and Sellers. Once Buyer and
            Seller have entered into a transaction, all transactions are covered
            by the Ticket Depot Guarantee, subject to the limitations set forth
            herein. 1.3 Modification. If We change this Agreement, We shall post
            a revised version of this Agreement, which shall automatically
            replace the terms of this Agreement. The revised version of this
            Agreement is automatically effective after it is initially posted on
            the Site/Application. Your continued use of the Site/Application and
            the Services following Ticket Depot's posting of a revised Agreement
            will constitute Your acceptance of the revised Agreement. If You do
            not agree with the terms of this Agreement or any revised version of
            this Agreement, do not continue to use the Services or this Site.
            2.1 Requirements. To be a member of this Site, You must agree to
            accept the terms in this Agreement. You may only use the Services if
            You can legally enter into and form binding contracts. If You do not
            qualify, do not use the Services. 2.2 Registration. We will not
            allow You to buy or sell tickets before You have registered with Us.
            To register, You must provide your email address and phone number.
            2.3 Username and Password. You will need a username and password to
            access the Site and use the Services. You are responsible for
            maintaining the security of your username and password and You are
            responsible for any action taken under your username or password.
            2.4 Listing. To sell tickets, a Seller lists the tickets in the Site
            database. As part of the listing process, the Seller assigns a price
            to the tickets and provides information including but not limited to
            an image of the e-ticket with visible QR code, name of the event,
            venue, date, and time, all in accordance with the process outlined
            in the help pages. To list as a Seller, You must provide a valid
            credit or debit card. You also grant Us a non-exclusive,
            transferable, worldwide, paid-up, royalty-free right and license to
            reproduce, modify, adapt, publish and display on the Site and on the
            sites of our marketing partners your descriptions of tickets listed
            for sale. This is so we can promote the sale of tickets and items
            that You list for sale. You further represent that you have
            purchased or been issued the ticket(s) or have a right to purchase
            or be issued the ticket(s) prior to listing such ticket(s) for sale.
            You further represent that You have the right to reissue or purchase
            said tickets on Ticket Depots secondary marketplace. 2.5 Tax on
            Seller Proceeds. The Seller is responsible for determining whether
            it/he/she is required to account for VAT (UK or other), GST, sales
            tax or other similar fees (collectively, “Tax”) on the sale of the
            ticket. We take no responsibility for such issues. If the Seller is
            required to account for Tax on the sale of the ticket, the Seller
            should include the Tax (i.e., total) when setting ticket prices on
            the website. Note that this is separate from any Tax Ticket Depot is
            required to charge on its fees. 2.6 Making an Offer. A member who
            wants to buy a ticket first scans the Site database for tickets
            listed by Sellers that match the Buyer's desired tickets. Once the
            Buyer finds a matching ticket, the Buyer notifies Us with a "buy
            request" that the Buyer is willing to purchase the ticket. Note that
            the Seller may or may not be required to charge you Tax on the sale
            of your ticket. Thus, the ticket price shown (before our fees) may
            include Tax as appropriate. Please note this does not include any
            Tax that may be payable on fees We are required to pay. As a Buyer,
            You grant Us permission to charge your credit card, debit card,
            PayPal account, or Google pay account for the purchase of the
            selected tickets. 2.7 Payment Authorisation. When We receive a buy
            request by credit or debit card, We obtain an authorisation from the
            Buyer's credit or debit card equal to the price, booking fees and
            transaction fees for the tickets. We will also add Tax on our fees
            as applicable. The authorisation will remain on the Buyer's credit
            or debit card until the sale is completed or the order is cancelled.
            When We receive an offer by PayPal/Google pay, We will obtain an
            authorisation from the Buyer's PayPal/Google pay account equal to
            the price, booking fees and transaction fees for the tickets. We
            will also add Tax on our fees as applicable. 2.8 Notification. Once
            We obtain an authorisation from Your credit card, debit card, PayPal
            account, or Google pay account, We notify the Seller of the sale via
            message on the Application and/or email, and We confirm to the
            Seller that the Buyer is willing to pay the listed price, booking
            fees, transaction fees, and taxes on our fees. Please note, selling
            prices for tickets traded on Ticket Depot may differ from their
            original ‘face value’ (i.e. the price it is sold for on the primary
            market). Additional information can be found in our FAQ’s and on the
            ticket details pages. 2.9 a) Exception to Seller’s Obligation to
            Confirm. Sellers who commit to send tickets directly to Ticket Depot
            are not required to confirm the order. Such sellers have no right to
            “Report a Problem” and the order is automatically confirmed
            immediately after the sale. If the listed ticket is fraudulent,
            Ticket Depot shall have the right to charge the Seller a replacement
            fee and other charges, as specified in Section 5, as well as the
            right to permanently block the user from Our services. 2.10
            Collecting Payment. Typically, upon the Buyer completing the
            transaction, We collect payment from the Buyer for the listed price,
            booking fees, transaction fees, and taxes on our fees. At no time do
            We provide the Buyer's payment information to the Seller. The money
            is paid to us, and the Seller is compensated for the sale according
            to their selected payment method and the payment policy in the help
            pages. 2.11 Ticket Fulfillment. Once the Seller lists tickets for
            sale and the Buyer purchases these tickets, the We are no longer
            responsible for completing the transaction with the exact tickets
            the Seller has listed. Invalid tickets: If buyers are refused entry
            to the venue as a result of invalid tickets we will not refund the
            buyer. This service is purely intended to facilitate the exchange of
            tickets between buyers and sellers, however no attempt is made by
            Ticket Depot to establish the existence or validity of the tickets
            on offer. The buyer is therefore responsible for satisfying
            themselves in relation to the tickets that they intend to purchase
            through this service. No refunds are offered. Invalid tickets are
            defined as anything where buyers are refused entry. Ticket Depot
            will not refund the buyer even if proof of non entry is not
            presented. In the event that an event is cancelled or re-scheduled,
            Ticket Depot will not refund the buyer. We attempt to ensure all
            tickets are delivered in time for the event, time scale permitting.
            2.12 Seller Payment. The Seller will be paid within 24 hours of
            ticket sale. We have the right to withhold payment or collect
            repayment if the event was re-scheduled or cancelled or if We have a
            good faith basis to believe such sales were unlawful or otherwise
            made in material violation of this agreement. 2.13 Ticket
            Information. Event dates, times, venues and images, which are listed
            on the ticket, may change. It is up to the Buyer to verify the most
            recent changes. 2.14 Ticket Depot Guarantee. When You purchase
            tickets on Ticket Depot, Ticket Depot guarantees that You will
            receive the tickets You paid for in time for the event, as specified
            by the seller. This service is purely intended to facilitate the
            exchange of tickets between buyers and sellers, however no attempt
            is made by Ticket Depot to establish the existence or validity of
            the tickets on offer. The buyer is therefore responsible for
            satisfying themselves in relation to the tickets that they intend to
            purchase through this service. No refunds are offered. When You sell
            tickets on Ticket Depot, Ticket Depot guarantees that you will be
            paid for your sale. 2.15 Claims under the Ticket Depot Guarantee. If
            You receive tickets from the Seller that are invalid and are not
            honoured at the venue, we strongly advise you to Contact Us to
            report the issue. Issues relating to the tickets which are apparent
            prior to the event must be reported within 10 working days after
            receiving the tickets, otherwise this will no longer be covered by
            the Ticket Depot Guarantee. For the avoidance of doubt, if a
            restriction on the ticket is disclosed to You in advance of your
            purchase, You will not be entitled to a refund. Should you
            experience problems with your tickets on the day of the event you
            must contact Ticket Depot within 5 working days of the incident to
            report the issue. Ticket Depot reserves the right to prohibit anyone
            who brings a fraudulent claim from having further access to our
            website/Application. Our guarantee does not affect Your statutory
            consumer rights under UK law. 2.16 Merchant Description. A payment
            to Ticket Depot will appear on the Buyer’s payment method statement
            as “TICKET DEPOT EVENT TICKETS”. 3.1 Accurate Descriptions. For all
            tickets You list as the Seller, You warrant that Your descriptions
            of the tickets accurately detail and describe the tickets offered
            for sale. You also warrant that you own the tickets. Ticket Depot
            reserves the right to prohibit anyone who uses fraudulent
            information in the sale of a ticket from having further access to
            our website/Application. 3.2 Other Information. You represent and
            warrant that any information You provide to us, to other members, or
            to visitors of the Site (a) is not false, inaccurate, misleading,
            obscene or defamatory; (b) is not fraudulent; (c) does not involve
            the sale of counterfeit or stolen items; (d) does not infringe any
            third party's copyright, patent, trademark, trade secret, rights of
            publicity or privacy, or other right; (e) does not violate any law,
            statute, ordinance or regulation, including without limitation those
            governing consumer protection, unfair competition,
            anti-discrimination or false advertising; and, (f) does not contain
            any viruses or any programming that is intended to damage, interfere
            with, intercept or expropriate any system, data or personal
            information. 3.3 Laws and Regulations. You warrant that You will
            comply with all applicable local, regional, country and
            international laws, statutes and regulations regarding use of the
            Site and selling value of the tickets. You warrant that you are over
            18 years old and have the legal capacity to make the transaction.
            3.4 Indemnity. You agree to indemnify and hold Ticket Depot and (if
            applicable) any parent, subsidiaries, affiliates, officers,
            directors, solicitors, agents and employees, harmless against all
            liabilities, costs and expenses (including reasonable solicitors’
            fees) incurred by Ticket Depot and (if applicable) any parents,
            subsidiaries, affiliates, officers, directors, agents, solicitors
            and employees that arise out of any claim asserted by a third party
            that involves, relates to or concerns any of your actions or
            omissions on this Site. 4.1 Double Posting and Removal of Tickets.
            To post a ticket for sale on Ticket Depot You must first register
            with the Site. Once a ticket is posted, We strongly discourage
            posting that ticket for sale elsewhere. If You do post your ticket
            for sale on other marketplaces, you are required to remove your
            ticket from the Site immediately if your ticket sells elsewhere.
            Except as provided herein, We reserve the right to prohibit users
            from posting tickets on Ticket Depot if they are not able to provide
            the exact tickets they posted on Ticket Depot. 4.2 Stolen Property.
            The sale of stolen property on Ticket Depot is strictly forbidden,
            and violates local, country and international law. Ticket Depot
            strongly supports law enforcement efforts to recover stolen property
            that is listed on the Site, and urges the prosecution of those
            responsible for knowingly attempting to sell such items on Ticket
            Depot. Stolen property includes items taken from private
            individuals, as well as property taken without authorization from
            companies or governments. 4.3 Sellers Shall Not Include Promotional
            Material with Tickets. The Buyer username is provided to Sellers for
            the sole purpose of delivering the specific purchased ticket(s) and
            may not be used by the Seller for any other purpose, either in
            connection with such delivery(ies) or separately from such
            delivery(ies). You agree not to include in your delivery to the
            Buyer any promotional or other commercial material that is not
            provided or approved by Ticket Depot. This includes, without
            limitation, material that announces a website or invites the Buyer
            to visit a website other than Ticket Depot, catalogues, business
            cards, business reply cards, bookmarks, coupons, flyers,
            solicitations or other marketing or advertising material. Including
            any such items constitutes a material breach of these terms and
            conditions. Note that Your payment may be withheld if you violate
            this clause. 5.1 Investigations. We may investigate complaints and
            violations of our policies. You agree to cooperate fully with such
            investigations, including without limitation providing Us specific
            information regarding your right to a ticket, the source of a
            ticket, your acquisition of a ticket, and the price You paid for a
            ticket. 5.2 Violations, Termination and Suspension. We may take any
            action that We deem appropriate in our sole discretion including
            without limitation issuing a warning, suspending or terminating
            service, denying access, removing a listing or recommending You edit
            a listing. You agree that payments owing to You for sales made
            through this Site may be suspended or delayed and that We are not
            obligated to pay You for any sales if We have a good faith basis to
            believe such sales were unlawful or otherwise made in material
            violation of this agreement. On termination, Your items may be
            de-listed if You are a Seller and Your purchases may be cancelled if
            you are a Buyer. 5.3 Disclosure of Information. You agree that We
            may report any activity that We suspect violates any law or
            regulation to appropriate law enforcement officials, regulators, or
            other relevant third parties. We will cooperate to ensure that
            violators are prosecuted to the fullest extent of the law. 5.4
            Making Adjustments. If (a) a sale is cancelled for any reason; (b)
            we reasonably believe that you have committed fraud or other illegal
            act or omission during any buying or selling activity; (c) you send
            incorrect, misrepresented, invalid, fraudulent or counterfeit
            tickets or related passes for any sale or portion of a sale; (d) You
            otherwise breach this Agreement or owe Us a specific amount, then
            you authorize Ticket Depot to withhold payment and/or prevent
            further use of our services. 6.1 No Warranty. Except for the express
            warranties stated in this agreement, Ticket Depot provides the
            software, site, application and services on an "as is" basis and "as
            available" basis without any warranties of any kind. Ticket Depot
            makes no warranty with respect to its software, any tickets, any
            event, the services Ticket Depot provides, or that sellers or buyers
            will perform as promised, and Ticket Depot expressly disclaims all
            such warranties, whether express, statutory or implied, including
            without limitation any warranties of quality, title,
            non-infringement of third party rights or fitness for a particular
            purpose. Some jurisdictions do not allow exclusions of implied
            warranties or limitations on how long an implied warranty lasts, so
            the above exclusion may not apply to you. 6.2 Waiver of
            Consequential Damages; Liability Limit. Ticket Depot expressly
            disclaims any responsibility for any lost profits or special,
            consequential, incidental, or exemplary damages (including without
            limitation indirect and special damages) that may result from the
            services, the site, or the suspension, termination or malfunction of
            the services or the site. Ticket Depot's liability to You or anyone
            else in any circumstance is limited to the lesser of (a) £0. Under
            no circumstances is Ticket Depot liable for any additional costs You
            incur if you purchase tickets from a third party for tickets you
            were unable to purchase on Ticket Depot. TicketDepot is not liable
            for any damage you may suffer because of your use of the Platform
            service or the Platform, even if such damage has been caused by
            intent, gross negligence or deliberate recklessness. Although
            TicketDepot takes as many measures as possible to ensure a safe and
            proper functioning Platform, it cannot guarantee the accuracy of the
            Platform service, nor the content of the Platform 6.3 Allocation of
            Risk. You acknowledge and agree that the foregoing disclaimers and
            limitations of liability represent reasonable allocations of risk,
            and that the pricing and other terms and conditions of this
            agreement reflect such allocations of risk. 6.4 Release. If You have
            a dispute with one or more members, You release Ticket Depot and all
            affiliated companies, officers, directors, agents, parents,
            subsidiaries, legal representatives and employees from claims,
            demands and damages (actual and consequential) of every kind and
            nature, known and unknown, suspected and unsuspected, disclosed and
            undisclosed, arising out of or in any way connected with such
            dispute. 6.5 Tax Indemnity. You agree that Ticket Depot is not
            responsible in any way for the accuracy or suitability of any
            payment of taxes to any entity on your behalf. You shall indemnify
            and hold Ticket Depot and (if applicable) any parents, subsidiaries,
            affiliates, officers, directors, agents and employees harmless
            against all liabilities, costs, interest and expenses (including
            reasonable attorneys' fees) incurred by Ticket Depot that arise out
            of any third party or governmental claim that involves, relates to
            or concerns (i) any local, regional, country, or international tax
            obligation or amounts due or owing under any tax regulation, law,
            order or decree or (ii) any dispute concerning the tax status of
            Ticket Depot. 6.6 No Agency. You and Ticket Depot are independent
            contractors, and no agency, partnership, joint venture,
            employer-employee or franchisor-franchisee relationship is intended
            or created by this Agreement. 6.7 Third Party Information. We do not
            control the information provided by other users which is made
            available through the application. You may find other user’s
            information to be offensive, harmful, inaccurate, or deceptive.
            Please use caution when using the Site and remember that there are
            risks of dealing with people acting under false pretences. By using
            this Site, You agree to accept such risks and agree that Ticket
            Depot is not responsible for the acts or omissions of users on the
            Site. 6.8 All Sales are Final. All sales and bids are final. No
            refunds, cancellations or exchanges will be issued for date or time
            changes, or any other reason. 6.9 Change or Suspension of Site.
            Ticket Depot reserves the right at any time to modify or
            discontinue, temporarily or permanently, the Site or any part of the
            Site with or without notice. You agree that We shall not be liable
            to You or any third party for any modification, suspension or
            discontinuance of the Site or any Services under this agreement, for
            any reason. We do not guarantee continuous, uninterrupted or secure
            access to our service, and operation of our Site may be interfered
            with by numerous factors outside of our control. In addition, the
            Site could be unavailable during certain periods of time while it is
            being updated and modified. During this time, the Site will be
            temporarily unavailable. 6.10 Notices. Except as expressly stated
            otherwise, all notices to Ticket Depot shall be sent through the
            email form provided on the Site under the Contact link. Our street
            address is Ticket Depot , Danes’ Road, Exeter, EX4 4LS. Except as
            expressly stated otherwise, all notices to You shall be sent to the
            email address You provided to us during the registration process.
            Such notice shall be deemed given one business day after the email
            is sent. 6.11 Permitted use. You are not permitted to use this
            website other than for the following, private, non-commercial
            purposes: (i) viewing this website; (ii) buying and/or selling
            tickets on this website; (iii) viewing transaction details; and (iv)
            making use of other facilities that may be provided by this website.
            The use of automated systems or software to extract data from this
            website for commercial purposes, (“screen scraping”) is strictly
            prohibited. 7.1 Ownership of Intellectual Property. You acknowledge
            and agree that (i) our patents, trade marks, trade names, service
            marks, copyrights and other intellectual property (collectively,
            "Intellectual Property") is and shall remain our sole property, and
            (ii) nothing in this agreement shall confer in You any right of
            ownership or license rights in our Intellectual Property. In
            addition, You shall not now or in the future contest the validity of
            Ticket Depot's Intellectual Property. 7.2 Copyright. Any
            unauthorized reproduction, modification, distribution, transmission,
            republication, display, or performance of the software or the
            content on the Site is strictly prohibited. 7.3 Additional Policies.
            This Agreement incorporates by reference the following policies and
            documents also found on this Site: Privacy Policy 7.4 Governing Law.
            This Agreement shall be governed by and interpreted in accordance
            with the UK laws. You consent to the exclusive personal jurisdiction
            and venue of UK courts. 7.5 Miscellaneous. This Agreement (and all
            documents incorporated by reference) constitutes the entire
            agreement between the parties pertaining to the subject matter
            hereof and supersedes all prior agreements and understandings
            between the parties hereto with respect to the subject matter
            hereof, whether written or oral. No amendment, modification or
            supplement of any provision of this Agreement will be valid or
            effective unless made in accordance with the express terms of this
            Agreement. If any provision of this Agreement is held to be invalid
            or unenforceable under any circumstances, its application in any
            other circumstances and the remaining provisions of this Agreement
            shall not be affected. You may not assign or transfer this
            Agreement, or any of its rights or obligations, without the prior
            written consent of Ticket Depot, which We can refuse in our sole
            discretion. Nothing in this Agreement is intended to confer
            benefits, rights or remedies unto any person or entity other than
            the parties hereto and their successors and permitted assigns. Our
            suppliers and co-brand partners are third-party beneficiaries of
            this Agreement. This does not prevent us from varying these terms
            without reference to them. The title at the beginning of each
            paragraph of this Agreement is for reference purposes only and in no
            way defines, limits, construes or describes the scope or extent of
            such paragraph.
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

export default Terms;
