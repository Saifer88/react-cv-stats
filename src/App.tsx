import * as React from 'react';
import './App.css';
import NavbarComponent from './Navbar';
import Page from './Page';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="container">
        <Page></Page>
      </div>
    </div>
  );
}

export default App;
