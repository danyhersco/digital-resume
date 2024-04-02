import React, { useState, useEffect } from 'react';
import './WelcomePage.css';
import { ReactComponent as WeirdForms} from '../images/short_forms.svg';


const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-page-left-side">
        <p className="resume-header">
          digital_resume<br />
          last_updated: 31/03/2024
        </p>
        <h1 className="welcome-page-h1">
          Dany<br />Herscovitch
        </h1>
        <h2 className="welcome-page-h2">
          Software<br />Engineer
        </h2>
      </div>
      <div className="welcome-page-right-side">
        <WeirdForms className="weird-forms" />
      </div>
    </div>
  )
}

export default WelcomePage;
