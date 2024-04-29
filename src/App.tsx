import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import NavigationBar from './components/NavigationBar';
import Overview from './components/overview/Overview';
import Education from './components/education/Education';
import WorkExperience from './components/work-experience/WorkExperience';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomePage/>
      <Overview/>
      <Education/>
      <WorkExperience/>
    </div>
  );
}

export default App;
