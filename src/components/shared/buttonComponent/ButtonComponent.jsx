import React from "react";
import "./ButtonComponent.css";
import { useNavigate } from "react-router-dom";

const ButtonComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="button-comp-container">
      <div className="button-comp-content">
        <button style={{letterSpacing:"0.8px"}} onClick={() => navigate('/contactus')}>Discover More</button>
      </div>
    </div>
  );
};

export default ButtonComponent;
