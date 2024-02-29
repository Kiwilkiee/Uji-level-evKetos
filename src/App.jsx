// src/App.jsx

import React, {  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Dashboard from './pages/Admin/DasboardPage'
import Daftarsiswa from './pages/Admin/DaftarSiswaPage'
import Datakandidat from './pages/Admin/DataKandidatPage'
import TambahSiswa from './pages/Admin/TambahSiswaPage'




import LoginPage from './pages/LoginPage';


const App = () => {
 

  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage/>} />

        {/* Admin */}

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Daftarsiswa" element={<Daftarsiswa />} />
          <Route path="/Datakandidat" element={<Datakandidat />} />
          <Route path="/TambhaSiswa" element={<TambahSiswa />} />
        

    
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
