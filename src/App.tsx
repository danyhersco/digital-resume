import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import NavigationBar from './components/NavigationBar';
import Education from './components/education/Education';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomePage/>
      <Education/>
    </div>
  );
}

export default App;
