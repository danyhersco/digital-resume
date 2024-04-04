import React from 'react';
import './Education.css'
import EducationItem from './EducationItem';



const Education: React.FC = () => {
  return(
    <div className="education-section">
      <div className="education-zone">
        <h1 className="education-h1">Education</h1>
        <EducationItem/>
        <EducationItem/>
        <EducationItem/>
        <EducationItem/>
      </div>
    </div>
  )
}

export default Education;
