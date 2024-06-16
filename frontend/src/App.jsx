import React from 'react';
import Login from './auth/login_component';
import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Maps from './pages/maps';
import Alerts from './pages/alerts';
import Reports from './pages/reports';
import Schedule from './pages/schedule';
import Settings from './pages/settings';
import Pune_city from './graph/pune-city'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './loader';

const Layout = ({ children }) => (
  <div className="layout">
    <NavBar />
    <Sidebar />
    {children}
  </div>
);

const App = () => {
  return (
    <div className="app">
      
      <Router>
        <Routes>
        <Route path="/loader" element={<Loader />} />
          <Route path="/sign-in" element={<Login />} />
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/maps" element={<Maps />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/settings" element={<Settings />} />
                  


                  <Route path="/pune-city" element={<Pune_city />} />
                  
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
