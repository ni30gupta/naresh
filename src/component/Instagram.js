import React from "react";
import InstagramAccount from "./InstagramAccount";
import InstagramLeftSide from "./InstagramLeftSide";
import InstagramLogin from "./InstagramLogin";
import GetApp from "./GetApp";
import "./Instagram.css";

function Instagram() {
  return (
    <div className="container p-4" style={{ minWidth: "60vw" }}>
      <div className="d-flex justify-content-center">
        <div className="col-lg-4 col-md-4  " style={{ marginRight: "70px" }}>
          <InstagramLeftSide />
        </div>
        <div className="col-lg-4 col-md-4 right ">
          <InstagramLogin />
          <InstagramAccount />
          <GetApp />
        </div>
      </div>
      <div className="text-center">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Instagram;
