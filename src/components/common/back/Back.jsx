import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();

  const locationName = location.pathname.split("/")[1];

  let backgroundImageUrl;

  if (locationName === "courses") {
    backgroundImageUrl =
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (locationName === "about") {
    backgroundImageUrl =
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (locationName === "test&notes") {
    backgroundImageUrl =
      "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (locationName === "roadmap") {
    backgroundImageUrl =
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
  } else if (locationName === "admin") {
    backgroundImageUrl =
      "https://images.unsplash.com/photo-1586385701456-a437c396bb11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else {
    backgroundImageUrl =
      "https://srswebio.netlify.app/static/media/gitm8.b258a465e3808ddaec78.jpeg";
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "90vh",
    paddingTop: "30%",
    paddingRight: "50px",
    color: "#fff",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "100px",
    fontWeight: 400,
  };

  const subheadingStyle = {
    fontWeight: 500,
    fontSize: "17px",
    textTransform: "uppercase",
  };

  return (
    <>
      <section style={backgroundStyle} className="back">
        <h2 style={subheadingStyle}>Home / {locationName}</h2>
        <h1 style={headingStyle}>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
