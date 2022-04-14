import * as React from "react";
import {Routes, Route} from "react-router-dom";
import './Page.css';
import About from "./pages/About";
import Regionale from "./pages/Regionale";
import Vaccini from "./pages/Vaccini";
import National from "./pages/National";
import Home from "./pages/Home";

interface PageProps {
  regionalData;
}


export default class Page extends React.Component<PageProps, {}>{

  constructor(props) {
    super(props);
  }

    render(): React.ReactNode {
        return (
    <div className="page">
      <Routes>
        <Route path="react-cv-stats" element={<Home />}/>
        <Route path="/" element={<Home />} />
        <Route path="national" element={<National />} />
        <Route path="regional/:id" element={<Regionale regionalData={this.props.regionalData} />} />
        <Route path="vaccini" element={<Vaccini />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>)
    }
}