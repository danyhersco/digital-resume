import React from 'react';
import ArrowLeft from "../../images/arrow_left.svg";
import ArrowRight from "../../images/arrow_right.svg";
import "./Activities.css";


const Activities: React.FC = () => {
  return (
    <div className="activities-section">
      <div className="activities-zone">
        <h1 className="activities-h1">Activities</h1>
        <div className="left-arrow-zone">
          <img src={ArrowLeft} alt="Left Arrow" />
        </div>
        <div className="activities-item">
          <h2 className="activity-title">Independant Graphic Designer</h2>
          <h2 className="activity-span">Since 2014</h2>
        </div>
        <div className="right-arrow-zone">
          <img src={ArrowRight} alt="Right Arrow"/>
        </div>
      </div>
    </div>
  )
}

export default Activities;
