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
      <section id="welcome"><WelcomePage/></section>
      <section id="overview"><Overview/></section>
      <section id="education"><Education/></section>
      <section id="work_experience"><WorkExperience/></section>
      <section id="activities"><Activities/></section>
      <section id="skills"><Skills/></section>
    </div>
  );
}

export default App;
