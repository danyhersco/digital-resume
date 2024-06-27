import "./EducationItem.css";
import { ReactComponent as ImperialLogo } from "../../images/imperial_logo.svg";
import { ReactComponent as LseLogo } from "../../images/lse_logo.svg";
import { ReactComponent as GanenouLogo } from "../../images/ganenou_logo.svg";
import { ReactComponent as LeWagonLogo } from "../../images/lewagon_logo.svg";
import { ReactComponent as UnknownLogo } from "../../images/unknown_logo.svg";

interface EducationItemProps {
  institutionName: string;
  startDate: string;
  endDate: string;
  educationLevel: string;
  // programmeName: string;
  // bulletPoints: []string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institutionName,
  startDate,
  endDate,
  educationLevel,
  // programmeName,
  // bulletPoints,
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
      {logoComponent}
      <div className="education-item-primary-info">
        <p className="institution-name">{institutionName}</p>
        <p className="education-span">{startDate} - {endDate}</p>
        <p className="education-level">{educationLevel}</p>
      </div>
    </div>
  )

  // return (
  //   <div className={`education-item-zone`}>
  //     {logoComponent}
  //     <div className="education-item">
  //       <h2>{institutionName}</h2>
  //       <p>
  //         {educationLevel} - {programmeName}
  //       </p>
  //       {isExpanded && (
  //         <div className="additional-info">
  //           <ul>
  //             {bulletPoints.map((point, index) => (
  //               <li key={index}>{point}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default EducationItem;
