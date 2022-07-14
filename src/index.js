import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import AppLayout from './components/AppLayout/AppLayout.js';
import AppHeader from './components/AppHeader/AppHeader';
import AppWebDesign  from './components/AppWebDesign/AppWebDesign';
import AppECommerce  from './components/AppECommerce/AppECommerce';
import AppWebDeployment from './components/AppWebDeployment/AppWebDeployment';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<AppLayout></AppLayout>}></Route>
              <Route path="/" element={<AppLayout></AppLayout>}></Route>
              <Route path="web-design" element={<AppWebDesign></AppWebDesign>}></Route>
              <Route path="e-commerce-sites" element={<AppECommerce></AppECommerce>}></Route>
              <Route path="website-deployment" element={<AppWebDeployment></AppWebDeployment>}></Route>
              <Route path="*" element={
                // ERROR 404
                <div>
                  <AppHeader></AppHeader>
                  <div className="text-center text-white mt-5">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                  </div>
                </div>
              }></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
