import * as React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Component from "./Component";
import Home from "./Home";
import './Page.css';


export default class Page extends React.Component{

    render(): React.ReactNode {
        return (
    <div className="page">
      <Routes>
        <Route path="react-cv-stats" element={<Home />}/>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="component" element={<Component />} />
      </Routes>
    </div>)
    }
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