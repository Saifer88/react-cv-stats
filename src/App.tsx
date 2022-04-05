import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Component from './Component';
import Home from './Home';
import NavbarComponent from './Navbar';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="component" element={<Component />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
