import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomePage/>
    </div>
  );
}

export default App;
