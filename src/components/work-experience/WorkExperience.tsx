import React, { useState } from 'react';
import "./WorkExperience.css";
import { ReactComponent as FlyLogo } from "../../images/fly_logo.svg";
import { ReactComponent as InitiatorLogo } from "../../images/initiator_logo.svg";
import { ReactComponent as KobleLogo } from "../../images/koble_logo.svg";
import { ReactComponent as MakorLogo } from "../../images/makor_logo.svg";
import { ReactComponent as RouvenatLogo } from "../../images/rouvenat_logo.svg";
import { ReactComponent as XapienLogo } from "../../images/xapien_logo.svg";
import workExperienceDataMapping from "./WorkExperienceData";

const WorkExperience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>("Fly");

  const handleLogoClick = (companyName: string) => {
    setSelectedExperience(companyName);
  };

  const workExperienceData = workExperienceDataMapping[selectedExperience]

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="work-experience-section">
      <div className="work-experience-zone">
        <h1 className="work-experience-h1">Work Experience</h1>
        <div className="work-experience-items">
          <div className="work-experience-logos">
              <FlyLogo
                className={`company-logo fly-logo ${selectedExperience === 'Fly' ? 'selected' : ''}`}
                onClick={() => handleLogoClick("Fly")}
              />
              <InitiatorLogo
                className={`company-logo initiator-logo ${selectedExperience === 'Initiator' ? 'selected' : ''}`}
                onClick={() => handleLogoClick("Initiator")}
              />
              <KobleLogo
                className={`company-logo koble-logo ${selectedExperience === 'Koble' ? 'selected' : ''}`}
                onClick={() => handleLogoClick("Koble")}
              />
              <MakorLogo
                className={`company-logo makor-logo ${selectedExperience === 'Makor' ? 'selected' : ''}`}
                onClick={() => handleLogoClick("Makor")}
              />
              <RouvenatLogo
                className={`company-logo rouvenat-logo ${selectedExperience === 'Rouvenat' ? 'selected' : ''}`}
                onClick={() => handleLogoClick("Rouvenat")}
              />
              <XapienLogo
                className={`company-logo xapien-logo ${selectedExperience === 'Xapien' ? 'selected' : ''}`}
                onClick={() => handleLogoClick("Xapien")}
              />
          </div>
          <div className="work-experience-data">
              <h2 className="work-experience-job-title">{workExperienceData.title}</h2>
              <h2 className="work-experience-company">{workExperienceData.companyName}</h2>
              <h2 className="work-experience-span">
                {workExperienceData.startDate} - {workExperienceData.endDate}
              </h2>
              <p className="work-experience-description">
                {formatDescription(workExperienceData.description)}
              </p>
              <a href={workExperienceData.link} target="_blank" rel="noopener noreferrer">
                <button className="work-experience-button">visit_{selectedExperience.toLowerCase()}</button>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;
