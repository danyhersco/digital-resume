import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import NavigationBar from './components/NavigationBar';
import Overview from './components/overview/Overview';
import Education from './components/education/Education';
import WorkExperience from './components/work-experience/WorkExperience';
import Activities from './components/activities/Activities';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomePage/>
      <Overview/>
      <Education/>
      <WorkExperience/>
      <Activities/>
      <Skills/>
    </div>
  );
}

export default App;
