import * as React from "react";
import {Routes, Route} from "react-router-dom";
import './Page.css';
import About from "./pages/About";
import Regionale from "./pages/Regionale";
import Support from "./pages/Support";
import Vaccini from "./pages/Vaccini";
import National from "./pages/National";
import Home from "./pages/Home";


export default class Page extends React.Component{

    render(): React.ReactNode {
        return (
    <div className="page">
      <Routes>
        <Route path="react-cv-stats" element={<Home />}/>
        <Route path="/" element={<Home />} />
        <Route path="national" element={<National />} />
        <Route path="regional" element={<Regionale />} />
        <Route path="vaccini" element={<Vaccini />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
      </Routes>
    </div>)
    }
}