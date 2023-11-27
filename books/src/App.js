import React from 'react';
import Navbar from './layouts/Navbar.component';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import AppRoutes from './layouts/AppRoutes';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Navbar />
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
