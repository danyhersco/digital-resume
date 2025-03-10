import React from 'react';
import './WelcomePage.css';
import { ReactComponent as Rope } from '../images/rope.svg';


const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-page-left">
        <p className="resume-header">
          digital_resume<br />
          last_updated: 17/02/2025
        </p>
        <h1 className="welcome-page-h1">
          Dany<br />Herscovitch
        </h1>
        <h2 className="welcome-page-h2">
          Software/AI<br />Engineer
        </h2>
      </div>
      <div className="welcome-page-right">
        <Rope className="rope"/>
      </div>
    </div>
  )
}

export default WelcomePage;
