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
              Programming Languages
            </h2>
            <h2 className="skill-group-body">
              Python, C/C++, C#, Golang, JavaScript, TypeScript (React), SQL
            </h2>
            <h2 className="skill-group-title">
              ML/AI Frameworks
            </h2>
            <h2 className="skill-group-body">
              scikit-learn, Pytorch, LangChain, Semantic Kernel, Ollama, HuggingFace, Azure AI Foundry, FastMCP
            </h2>
            <h2 className="skill-group-title">
              Scientific Computing
            </h2>
            <h2 className="skill-group-body">
              Numpy, Pandas, Matplotlib, SciPy, Statsmodels, OpenMP, MPI
            </h2>
          </div>
          <div className="skills-col-2">
            <h2 className="skill-group-title">
              DevOps & Cloud
            </h2>
            <h2 className="skill-group-body">
              Azure Cloud, Docker, Git, GitHub Actions, MLflow
            </h2>
            <h2 className="skill-group-title">
              Music
            </h2>
            <h2 className="skill-group-body">
              Piano, Guitar, Music Production, FL Studio, Logic Pro, Serum
            </h2>
            <h2 className="skill-group-title">
              Graphic Design
            </h2>
            <h2 className="skill-group-body">
              Adobe Photoshop, Illustrator, InDesign, XD, Figma
            </h2>
            <h2 className="skill-group-title">
              Languages
            </h2>
            <h2 className="skill-group-body">
              French, English
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
