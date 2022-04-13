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
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "AZi7XZF4W5hPyz0MwJc01B7XVobFjJ9NOyevsRzn1-0wrBEwdhGIdoLCoT6x9auYkwzO0uMYCSlQrsfy",
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode>
  <PayPalScriptProvider options={initialOptions}>
  <BrowserRouter>
  <div className='app'>
  <App></App>
  </div>
  </BrowserRouter>
  </PayPalScriptProvider>
  </React.StrictMode>);