import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '/public/img/logo-EV.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faList } from '@fortawesome/free-solid-svg-icons';
import { IoPersonAddSharp } from "react-icons/io5";
import '../dist/css/Admin/admin.css';

const SidebarComponent = () => {
  const location = useLocation(); // Mendapatkan lokasi saat ini

  return (
    <div className='sidebar-admin'>
      <h2>Ev-Ketos</h2>
      <img src={Logo} alt="logo" style={{ width: '100%' }} />
      <ul>
        <li className={location.pathname === '/' ? 'menu-item-admin active-admin' : 'menu-item-admin'}>
          <Link to="/`"><FontAwesomeIcon icon={faHome} /> Dashboard</Link>
        </li>
        <li className={location.pathname === '/data-kandidat' ? 'menu-item-admin active-admin' : 'menu-item-admin'}>
          <Link to="/data-kandidat"><FontAwesomeIcon icon={faUsers} /> Data Kandidat</Link>
        </li>
        <li className={location.pathname === '/daftar-siswa' ? 'menu-item-admin active-admin' : 'menu-item-admin'}>
          <Link to="/daftar-siswa"><FontAwesomeIcon icon={faList} /> Daftar Siswa</Link>
        </li>
        <li className={location.pathname === '/tambah-siswa' ? 'menu-item-admin active-admin' : 'menu-item-admin'}>
          <Link to="/tambah-siswa"> <IoPersonAddSharp />Tambah Siswa</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComponent;
