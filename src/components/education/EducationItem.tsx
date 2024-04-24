import React from "react";
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
}

const EducationItem: React.FC<EducationItemProps> = ({
  institutionName,
  educationLevel,
  programmeName,
}) => {

  let logoComponent = null;

  switch (institutionName) {
    case "Imperial College London":
      logoComponent = <ImperialLogo className="institution-logo imperial-logo"/>;
      break;
    case "London School of Economics":
      logoComponent = <LseLogo className="institution-logo lse-logo"/>;
      break;
    case "Athénée Ganenou":
      logoComponent = <GanenouLogo className="institution-logo ganenou-logo"/>;
      break;
    case "Le Wagon":
      logoComponent = <LeWagonLogo className="institution-logo lewagon-logo"/>;
      break;
    default:
      logoComponent = <UnknownLogo className="institution-logo unknown-logo"/>;
  }

  return (
    <div className="education-item-zone">
      {logoComponent}
      <div className="education-item">
        <h2>{institutionName}</h2>
        <p>
          {educationLevel} - {programmeName}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
