import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import NavigationBar from './components/NavigationBar';
import Overview from './components/overview/Overview';
import Education from './components/education/Education';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomePage/>
      <Overview/>
      <Education/>
    </div>
  );
}

export default App;
