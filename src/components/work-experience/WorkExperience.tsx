import React from 'react';
import "./WorkExperience.css";
import { ReactComponent as FlyLogo } from "../../images/fly_logo.svg";
import { ReactComponent as InitiatorLogo } from "../../images/initiator_logo.svg";
import { ReactComponent as KobleLogo } from "../../images/koble_logo.svg";
import { ReactComponent as MakorLogo } from "../../images/makor_logo.svg";
import { ReactComponent as RouvenatLogo } from "../../images/rouvenat_logo.svg";
import { ReactComponent as XapienLogo } from "../../images/xapien_logo.svg";

const WorkExperience: React.FC = () => {
  return (
    <div className="work-experience-section">
      <div className="work-experience-zone">
        <h1 className="work-experience-h1">Work Experience</h1>
        <div className="work-experience-items">
          <div className="work-experience-logos">
              <FlyLogo className="company-logo fly-logo"/>
              <InitiatorLogo className="company-logo initiator-logo"/>
              <KobleLogo className="company-logo koble-logo"/>
              <MakorLogo className="company-logo makor-logo"/>
              <RouvenatLogo className="company-logo rouvenat-logo"/>
              <XapienLogo className="company-logo xapien-logo"/>
          </div>
          <div className="work-experience-description">
              Description here
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;
