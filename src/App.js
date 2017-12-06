import React, { Component } from 'react';
import './App.css';

//importing components
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Banner />
          <Education />
          <Skills />
          <WorkExperience />
          <Projects />
        </main>
      </div>
    );
  }
}

export default App;
