import React from 'react';
import "./SkillPill.css"

interface SkillPillProps {
  text: string;
  colour: string;
}

const SkillPill: React.FC<SkillPillProps> = ({text, colour}) => {
  const pillStyle = {
    backgroundColor: colour
  };

  return (
    <div className="skill-pill-text" style={pillStyle}>{text.toUpperCase()}</div>
  )
}

export default SkillPill;
