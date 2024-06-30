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
            bulletPoints={[
              "Mathematics - 95%, Software Engineering - 92%, Data Science - 89%",
              "AI and Machine Learning-assisted Biomimicry"
            ]}
          />
          <EducationItem
            institutionName="London School of Economics"
            startDate="2019"
            endDate="2022"
            educationLevel="Bachelor's Degree"
            programmeName="Bsc Management"
            bulletPoints={[
              "Macroeconomics - 95%, Mathematics - 92%, Statistics - 89%, Accounting - 88%",
              "Overall Upper Second-Class Honours (2:1) with 69% average"
            ]}
          />
          <EducationItem
            institutionName="Athénée Ganenou"
            startDate="2013"
            endDate="2019"
            educationLevel="High School Degree"
            programmeName="Mathematics Advanced"
            bulletPoints={[
              "Mathematics - 92%, Physics - 89%, Chemistry - 82%",
              "Best Academic Prize with year-end overall of 85%"
            ]}
          />
          <EducationItem
            institutionName="Le Wagon"
            startDate="10/2022"
            endDate="03/2023"
            educationLevel="Bootcamp"
            programmeName="Data Science Bootcamp"
            bulletPoints={[
              "Data Analysis, Decision Science, Machine Learning, Deep Learning, ML Ops",
              "Predicting long-run performance of startups with Machine Learning"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
