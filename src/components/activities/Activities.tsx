import React, {useState} from 'react';
import ArrowLeft from "../../images/arrow_left.svg";
import ArrowRight from "../../images/arrow_right.svg";
import "./Activities.css";
import activitiesData from './ActivitiesData';
import SkillPill from '../utils/SkillPill';

const Activities: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === activitiesData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? activitiesData.length - 1 : prevIndex - 1
    );
  };

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const activeActivityData = activitiesData[activeIndex];

  return (
    <div className="activities-section">
      <div className="activities-zone">
        <h1 className="activities-h1">Activities</h1>
        <div className="activities-carousel">

          <div onClick={prevSlide} className="arrow-zone">
            <img src={ArrowLeft} alt="Left Arrow"/>
          </div>

          <div className="activities-item">
            <h2 className="activity-title">{activeActivityData.activity}</h2>
            <h2 className="activity-span">
              {activeActivityData.startDate} - {activeActivityData.endDate}
            </h2>
            <p className="activity-description">
              {formatDescription(activeActivityData.description)}
            </p>
            <div>
              <button disabled className="activity-button">learn_more</button>
              <SkillPill text="soon" colour="#FF5353" />
            </div>
          </div>

          <div onClick={nextSlide} className="arrow-zone">
            <img src={ArrowRight} alt="Right Arrow"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Activities;
