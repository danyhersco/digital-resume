import React, { useState, useEffect } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import NavigationBar from './components/NavigationBar';
import Overview from './components/overview/Overview';
import Education from './components/education/Education';
import WorkExperience from './components/work-experience/WorkExperience';
import Activities from './components/activities/Activities';
import Skills from './components/skills/Skills';
// import Chat from './components/chat/Chat';

const App: React.FC = () => {
  const [isTooSmall, setIsTooSmall] = useState(false);

  const maxWindowWidth = 1280;
  const maxWindowHeight = 680;
  const checkWindowSize = () => {
    setIsTooSmall(window.innerWidth < maxWindowWidth || window.innerHeight < maxWindowHeight);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  if (isTooSmall) {
    return (
      <div className="disabled-window">
        <div className="disabled-message">
          <p>
            Your screen or window is too small.
            <br/>
            My website will be available on all devices soon.
            <br/><br/>
            Best,<br/>
            Dany :)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <NavigationBar/>
      <section id="welcome"><WelcomePage/></section>
      <section id="overview"><Overview/></section>
      <section id="education"><Education/></section>
      <section id="work_experience"><WorkExperience/></section>
      <section id="activities"><Activities/></section>
      <section id="skills"><Skills/></section>
      {/* <section id="chat_with_me"><Chat/></section> */}
    </div>
  );
}

export default App;
