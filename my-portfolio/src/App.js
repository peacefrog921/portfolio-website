import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;

