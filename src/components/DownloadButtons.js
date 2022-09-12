import React from "react";

function DownloadButtons() {
  return (
    <div
      style={{
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: "8%",
        marginBottom: "8%",
      }}
    >
      <div>
        <a
          href="https://apps.apple.com/us/app/facebook/id284882215?itsct=apps_box_badge&amp;itscg=30200"
          style={{
            verticalAlign: "middle",
            borderRadius: "6.5px",
            width: "125px",
            height: "42px",
          }}
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1549324800&h=39e6070ae83c8fe90757af6f0144100f"
            alt="Download on the App Store"
            style={{ borderRadius: "6.5px", width: "125px", height: "42px" }}
          />
        </a>
      </div>
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=com.facebook.katana&gl=GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          style={{ verticalAlign: "middle", width: "145px" }}
        >
          <img
            alt="Get it on Google Play"
            style={{ width: "145px" }}
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </div>
    </div>
  );
}
export default DownloadButtons;
