import React from 'react';
import './NavigationBar.css';


const NavigationBar: React.FC = () => {
  return(
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
  )
}

export default NavigationBar;
