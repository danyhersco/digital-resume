import React, { useState } from "react";
import "./EducationItem.css";
import { ReactComponent as ImperialLogo } from "../../images/imperial_logo.svg";
import { ReactComponent as LseLogo } from "../../images/lse_logo.svg";
import { ReactComponent as GanenouLogo } from "../../images/ganenou_logo.svg";
import { ReactComponent as LeWagonLogo } from "../../images/lewagon_logo.svg";
import { ReactComponent as UnknownLogo } from "../../images/unknown_logo.svg";

interface EducationItemProps {
  institutionName: string;
  educationLevel: string;
  programmeName: string;
  isExpanded: boolean;
  onToggleExpansion: () => void;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institutionName,
  educationLevel,
  programmeName,
  isExpanded,
  onToggleExpansion
}) => {

  const logoComponent = (() => {
    switch (institutionName) {
      case "Imperial College London":
        return <ImperialLogo className="institution-logo imperial-logo"/>;
      case "London School of Economics":
        return <LseLogo className="institution-logo lse-logo"/>;
      case "Athénée Ganenou":
        return <GanenouLogo className="institution-logo ganenou-logo"/>;
      case "Le Wagon":
        return <LeWagonLogo className="institution-logo lewagon-logo"/>;
      default:
        return <UnknownLogo className="institution-logo unknown-logo"/>;
    }
  })();

  return (
    <div className={`education-item-zone ${isExpanded ? 'expanded' : ''}`}>
      {logoComponent}
      <div className="education-item" onClick={onToggleExpansion}>
        <h2>{institutionName}</h2>
        <p>
          {educationLevel} - {programmeName}
        </p>
        {isExpanded && (
          <div className="additional-info">
            {"This is what I did at Imperial"}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
