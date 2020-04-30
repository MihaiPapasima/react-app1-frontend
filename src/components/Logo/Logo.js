import React from "react";
import Tilt from "react-tilt";
import myLogo from "./Logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          <img alt="Logo" src={myLogo}></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
