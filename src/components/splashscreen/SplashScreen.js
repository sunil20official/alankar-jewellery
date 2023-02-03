import React from "react";
import logo from '../../assets/logo_low_white.png';

const SplashScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: "rgb(7, 3, 34)",
      }}
    >
      <div>
        <img style={{ height: "30vh" }} src={logo} alt="preloader logo" />
        {/* <h1 style={{fontFamily:"RegularCalson"}}>alankar jwellers</h1> */}
      </div>
    </div>
  );
};

export default SplashScreen;
