import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <div className="skills-zone">
        <h1 className="skills-h1">
          Skills Collection
        </h1>
        <div className="skills-collection">
          <div className="skills-col-1">
            <h2 className="skill-group-title">
              Technology
            </h2>
            <h2 className="skill-group-body">
              Python, JavaScript, TypeScript (React), Golang, SQL, C#, C++, PyTorch, Sklearn, Pandas, Langchain
            </h2>
            <h2 className="skill-group-title">
              Management
            </h2>
            <h2 className="skill-group-body">
              Branding, Collaboration, Communication, Economics, Marketing, Startup Development
            </h2>
            <h2 className="skill-group-title">
              Languages
            </h2>
            <h2 className="skill-group-body">
              French, English, Hebrew, Dutch
            </h2>
          </div>
          <div className="skills-col-2">
            <h2 className="skill-group-title">
              Music
            </h2>
            <h2 className="skill-group-body">
              Piano, Guitar, Music Production, FL Studio, Logic Pro, Sound Design (Serum)
            </h2>
            <h2 className="skill-group-title">
              Graphic Design
            </h2>
            <h2 className="skill-group-body">
              Adobe Photoshop, Illustrator, InDesign, XD, Figma
            </h2>
            <h2 className="skill-group-title">
              Soft Skills
            </h2>
            <h2 className="skill-group-body">
              Friendly, Fast Learner, Ambitious, Sociable, Procative, Perfectionism
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
