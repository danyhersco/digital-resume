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
        <h1>
          Dany<br />
          Herscovitch
        </h1>
        <h2>
          Software<br />
          Engineer
        </h2>
        <nav className="navigation-bar">
          <ul>
            <li><a href="#overview">overview</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#work_experience">work_experience</a></li>
            <li><a href="#hobbies">hobbies</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#chat_with_me">chat_with_me</a></li>
          </ul>
        </nav>
      </div>
      <div className="welcome-page-right-side">
        <WeirdForms className="weird-forms" />
      </div>
    </div>
  )
}

export default WelcomePage;
