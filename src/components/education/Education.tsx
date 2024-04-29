import React, { useState } from "react";
import "./Education.css";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpansion = (institutionName: string) => {
    if (expandedItem === institutionName) {
      setExpandedItem(null);
    } else {
      setExpandedItem(institutionName);
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
          bulletPoints={[
            "Span: 09/2024 - 09/2025 (Expected)",
            "Grades: Mathematics - 95%, Software Engineering - 92%, Data Science - 89%",
            "Thesis: AI and Machine Learning-assisted Biomimicry"
          ]}
          isExpanded={expandedItem === "Imperial College London"}
          onToggleExpansion={() => toggleExpansion("Imperial College London")}
        />
        <EducationItem
          institutionName="London School of Economics"
          educationLevel="Bachelor's Degree"
          programmeName="Bsc Management"
          bulletPoints={[
            "Span: 09/2019 - 07/2022",
            "Grades: Macroeconomics - 95%, Mathematics - 92%, Statistics - 89%, Accounting - 88%",
            "Honours: Overall Upper Second-Class Honours (2:1) with 69% average"
          ]}
          isExpanded={expandedItem === "London School of Economics"}
          onToggleExpansion={() => toggleExpansion("London School of Economics")}
        />
        <EducationItem
          institutionName="Athénée Ganenou"
          educationLevel="High School Degree"
          programmeName="Mathematics Advanced"
          bulletPoints={[
            "Span: 08/2013 - 06/2019",
            "Grades: Mathematics - 92%, Physics - 89%, Chemistry - 82%",
            "Honours: Best Academic Prize with year-end overall of 85%"
          ]}
          isExpanded={expandedItem === "Athénée Ganenou"}
          onToggleExpansion={() => toggleExpansion("Athénée Ganenou")}
        />
        <EducationItem
          institutionName="Le Wagon"
          educationLevel="Bootcamp"
          programmeName="Data Science"
          bulletPoints={[
            "Span: 10/2022 - 04/2023",
            "Courses: Data Analysis, Decision Science, Machine Learning, Deep Learning, ML Ops",
            "Final Project: Predicting long-run performance of startups with Machine Learning"
          ]}
          isExpanded={expandedItem === "Le Wagon"}
          onToggleExpansion={() => toggleExpansion("Le Wagon")}
        />
      </div>
    </div>
  );
};

export default Education;
