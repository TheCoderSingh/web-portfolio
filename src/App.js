import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Experience from './components/pages/Experience'
import Projects from './components/pages/Projects'
import Publications from './components/pages/Publications'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </Grid>
    </div>
  );
}

export default App;
