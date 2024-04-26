import React, { useState } from "react";
import "./Education.css";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpansion = (institutionName: string) => {
    if (expandedItem === institutionName) {
      setExpandedItem(null); // Collapse the currently expanded item
    } else {
      setExpandedItem(institutionName); // Expand the new item
    }
  };

  return (
    <div className="education-section">
      <div className="education-zone">
        <h1 className="education-h1">Education</h1>
        <EducationItem
          institutionName="Imperial College London"
          educationLevel="Master's Degree"
          programmeName="MSc Computational Science and Engineering"
          isExpanded={expandedItem === "Imperial College London"}
          onToggleExpansion={() => toggleExpansion("Imperial College London")}
        />
        <EducationItem
          institutionName="London School of Economics"
          educationLevel="Bachelor's Degree"
          programmeName="Bsc Management"
          isExpanded={expandedItem === "London School of Economics"}
          onToggleExpansion={() => toggleExpansion("London School of Economics")}
        />
        <EducationItem
          institutionName="Athénée Ganenou"
          educationLevel="High School Degree"
          programmeName="Mathematics Advanced"
          isExpanded={expandedItem === "Athénée Ganenou"}
          onToggleExpansion={() => toggleExpansion("Athénée Ganenou")}
        />
        <EducationItem
          institutionName="Le Wagon"
          educationLevel="Bootcamp"
          programmeName="Data Science"
          isExpanded={expandedItem === "Le Wagon"}
          onToggleExpansion={() => toggleExpansion("Le Wagon")}
        />
      </div>
    </div>
  );
};

export default Education;
