import React, { useState } from "react";
import "./Education.css";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  return (
    <div className="education-section">
      <div className="education-zone">
        <h1 className="education-h1">Education</h1>
        <div className="education-items">
          <EducationItem
            institutionName="Imperial College London"
            startDate="2024"
            endDate="2025"
            educationLevel="Master's Degree"
            programmeName="MSc Computational Science and Engineering"
            educationDetails="Expected to start in September 2024"
          />
          <EducationItem
            institutionName="London School of Economics"
            startDate="2019"
            endDate="2022"
            educationLevel="Bachelor's Degree"
            programmeName="Bsc Management"
            educationDetails="Upper Second-Class Honours 69%<br />Macroeconomics - 95%, Mathematics - 92%, Statistics - 89%, Accounting - 88%"
          />
          <EducationItem
            institutionName="Athénée Ganenou"
            startDate="2013"
            endDate="2019"
            educationLevel="High School Degree"
            programmeName="Mathematics Advanced"
            educationDetails="Best Academic Prize with average of 85%<br />Mathematics 92%, Physics 89%, Biology 85%, Chemistry 82%"
          />
          <EducationItem
            institutionName="Le Wagon"
            startDate="10/2022"
            endDate="03/2023"
            educationLevel="Bootcamp"
            programmeName="Data Science Bootcamp"
            educationDetails="Data Analysis, Decision Science, Machine Learning, Deep Learning, MLOps<br />Predicting startup success with ML"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
