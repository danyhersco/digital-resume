import React from "react";
import "./Education.css";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  return (
    <div className="education-section">
      <div className="education-zone">
        <h1 className="education-h1">Education</h1>
        <EducationItem
          institutionName="Imperial College London"
          educationLevel="Master's Degree"
          programmeName="MSc Computational Science and Engineering"
        />
        <EducationItem
          institutionName="London School of Economics"
          educationLevel="Bachelor's Degree"
          programmeName="Bsc Management"
        />
        <EducationItem
          institutionName="Athénée Ganenou"
          educationLevel="High School Degree"
          programmeName="Mathematics Advanced"
        />
        <EducationItem
          institutionName="Le Wagon"
          educationLevel="Bootcamp"
          programmeName="Data Science"
        />
      </div>
    </div>
  );
};

export default Education;
