import React from 'react';
import ArrowLeft from "../../images/arrow_left.svg";
import ArrowRight from "../../images/arrow_right.svg";
import "./Activities.css";
import activitiesDataMapping from './ActivitiesData';

const Activities: React.FC = () => {
  const activitiesData = activitiesDataMapping["Piano"]

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };


  return (
    <div className="activities-section">
      <div className="activities-zone">
        <h1 className="activities-h1">Activities</h1>
        <div className="activities-carousel">

          <div className="arrow-zone">
            <img src={ArrowLeft} alt="Left Arrow"/>
          </div>

          <div className="activities-item">
            <h2 className="activity-title">{activitiesData.activity}</h2>
            <h2 className="activity-span">
              {activitiesData.startDate} - {activitiesData.endDate}
            </h2>
            <p className="activity-description">
              {formatDescription(activitiesData.description)}
            </p>
            <div className="activity-gallery">
              <div className="gallery-element"></div>
              <div className="gallery-element"></div>
            </div>
          </div>

          <div className="arrow-zone">
            <img src={ArrowRight} alt="Right Arrow"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Activities;
