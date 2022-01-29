import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Listings from './components/routes/Listings';
import CompanyRegister from './components/routes/CompanyRegister';
import Navbar from './components/routes/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
      <div style={{ padding: 30 }}>
          <Routes exact path="/">
            <Route index element={<Listings/>}/>
            <Route path="register" element={<CompanyRegister />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
