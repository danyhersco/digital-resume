import "./EducationItem.css";
import { ReactComponent as ImperialLogo } from "../../images/imperial_logo.svg";
import { ReactComponent as LseLogo } from "../../images/lse_logo.svg";
import { ReactComponent as GanenouLogo } from "../../images/ganenou_logo.svg";
import { ReactComponent as LeWagonLogo } from "../../images/lewagon_logo.svg";
import { ReactComponent as UnknownLogo } from "../../images/unknown_logo.svg";
import SkillPill from "../utils/SkillPill";

interface EducationItemProps {
  institutionName: string;
  startDate: string;
  endDate: string;
  educationLevel: string;
  programmeName: string;
  educationDetails: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institutionName,
  startDate,
  endDate,
  educationLevel,
  programmeName,
  educationDetails,
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
    <div className="education-item-zone">
      <div className="education-item-primary-info">
        {logoComponent}
        <div className="education-item-primary-info-text">
          <p className="institution-name">{institutionName}</p>
          <p className="education-span">{startDate} - {endDate}</p>
          <SkillPill text={educationLevel} colour="black"/>
        </div>
      </div>
      <div className="education-item-secondary-info">
        <p className="programme-name">{programmeName}</p>
        {educationDetails.split('<br />').map((line, index) => (
          <p className="education-details" key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
};

export default EducationItem;
