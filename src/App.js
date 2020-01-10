import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/NavBar';
import Jumbo from './component/Jumbo';
import About from './component/About';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Jumbo/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
