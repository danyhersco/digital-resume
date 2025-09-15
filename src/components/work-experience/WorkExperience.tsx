import React, { useState } from "react";
import "./WorkExperience.css";
import { ReactComponent as FlyLogo } from "../../images/fly_logo.svg";
import { ReactComponent as MicrosoftLogo } from "../../images/microsoft_logo.svg";
import { ReactComponent as InitiatorLogo } from "../../images/initiator_logo.svg";
import { ReactComponent as KobleLogo } from "../../images/koble_logo.svg";
import { ReactComponent as RouvenatLogo } from "../../images/rouvenat_logo.svg";
import { ReactComponent as XapienLogo } from "../../images/xapien_logo.svg";
import { ReactComponent as Arrow } from "../../images/arrow_right.svg";
import workExperienceDataMapping from "./WorkExperienceData";

const WorkExperience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>("Xapien");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

  const handleLogoClick = (companyName: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedExperience(companyName);
      setIsTransitioning(false);
    }, 200)
  };

  const workExperienceData = workExperienceDataMapping[selectedExperience];

  const formatDescription = (description: string) => {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  let selectedLogo;

  switch (selectedExperience) {
    case "Microsoft":
      selectedLogo = <MicrosoftLogo />;
      break;
    case "Xapien":
      selectedLogo = <XapienLogo />;
      break;
    case "Koble":
      selectedLogo = <KobleLogo />;
      break;
    case "Initiator":
      selectedLogo = <InitiatorLogo />;
      break;
    case "Rouvenat":
      selectedLogo = <RouvenatLogo />;
      break;
    case "Fly":
      selectedLogo = <FlyLogo />;
      break;
    default:
      selectedLogo = <MicrosoftLogo />;
  }

  return (
    <div className="work-experience-section">
      <div className="work-experience-zone">
        <h1 className="work-experience-h1">Work Experience</h1>
        <div className="work-experience-items">
          <div className="work-experience-choices">
            <div
              className={`choice microsoft ${
                selectedExperience === "Microsoft" ? "selected" : ""
              }`}
              onClick={() => handleLogoClick("Microsoft")}
            >
              Microsoft
              <Arrow className="work-experience-arrow"/>
            </div>
            <div
              className={`choice xapien ${
                selectedExperience === "Xapien" ? "selected" : ""
              }`}
              onClick={() => handleLogoClick("Xapien")}
            >
              Xapien
              <Arrow className="work-experience-arrow"/>
            </div>
            <div
              className={`choice koble ${
                selectedExperience === "Koble" ? "selected" : ""
              }`}
              onClick={() => handleLogoClick("Koble")}
            >
              Koble
              <Arrow className="work-experience-arrow"/>
            </div>
            <div
              className={`choice initiator ${
                selectedExperience === "Initiator" ? "selected" : ""
              }`}
              onClick={() => handleLogoClick("Initiator")}
            >
              Initiator
              <Arrow className="work-experience-arrow"/>
            </div>
            <div
              className={`choice rouvenat ${
                selectedExperience === "Rouvenat" ? "selected" : ""
              }`}
              onClick={() => handleLogoClick("Rouvenat")}
            >
              Rouvenat
              <Arrow className="work-experience-arrow"/>
            </div>
            <div
              className={`choice fly ${
                selectedExperience === "Fly" ? "selected" : ""
              }`}
              onClick={() => handleLogoClick("Fly")}
            >
              Fly
              <Arrow className="work-experience-arrow"/>
            </div>
          </div>
          <div className={`work-experience-data ${isTransitioning ? '' : 'active'}`}>
            <div className="work-experience-header">
              <div className="company-logo">{selectedLogo}</div>
              <div className="work-experience-specifics">
                <h2 className="work-experience-job-title">
                  {workExperienceData.title}
                </h2>
                <h2 className="work-experience-company">
                  {workExperienceData.companyName}
                </h2>
                <h2 className="work-experience-span">
                  {workExperienceData.startDate} - {workExperienceData.endDate}
                </h2>
              </div>
            </div>
            <p className="work-experience-description">
              {formatDescription(workExperienceData.description)}
            </p>
            <a
              href={workExperienceData.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="work-experience-button">
                visit_{selectedExperience.toLowerCase()}
              </button>
            </a>
            <div className="hello"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
