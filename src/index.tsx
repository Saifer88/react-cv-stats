import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';
import Popper from 'popper.js';



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode>
  <BrowserRouter>
  <div className='app'>
  <App></App>
  </div>
  </BrowserRouter>
  </React.StrictMode>);