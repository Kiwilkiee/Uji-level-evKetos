// src/App.jsx
// import './assets/css/admin.css'
// import './index.css'
import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// import Dashboard from './pages/Admin/DasboardPage'
import Daftarsiswa from './pages/Admin/DaftarSiswaPage'
import Datakandidat from './pages/Admin/DataKandidatPage'
import TambahSiswa from './pages/Admin/TambahSiswaPage'




import LoginPage from './pages/LoginPage';
import ParentAdmin from './ParentAdmin';
import DashboardPage from './pages/Admin/DasboardPage';
import ParentUser from './ParentUser';


const App = () => {


  return (
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<ParentUser/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
          </Route>

          {/* Admin */}

          <Route path='/admin' element={<ParentAdmin />}>
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path="daftar-siswa" element={<Daftarsiswa />} />
            <Route path="data-kandidat" element={<Datakandidat />} />
            <Route path="TambhaSiswa" element={<TambahSiswa />} />
          </Route>
        </Routes>

      </div>
    </Router>
  );
};

export default App;
