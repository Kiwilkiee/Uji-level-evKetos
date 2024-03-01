import React, { useState, useEffect } from 'react';
import Logo from '/img/Logo-EV.png';
// import '../dist/css/index.css';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showLogoutNotification, setShowLogoutNotification] = useState(false);
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `Login`;
    navigate(path);
  };

  const handleLogout = () => {
    // Menampilkan notifikasi konfirmasi logout
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = (confirmed) => {
    // Menutup notifikasi dan logout jika dikonfirmasi
    setShowLogoutConfirmation(false);
    if (confirmed) {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigate('/');

      // Tampilkan notifikasi logout berhasil
      if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('Logout Berhasil', {
              body: 'Anda telah berhasil logout dari aplikasi.',
            });
          }
        });
      }

      // Menampilkan notifikasi logout berhasil di komponen
      setShowLogoutNotification(true);
      setTimeout(() => {
        setShowLogoutNotification(false);
      }, 100000); // Notifikasi akan hilang setelah 3 detik
    }
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const threshold = 50;
    setIsBlurred(scrollPosition > threshold);
  }, [scrollPosition]);

  useEffect(() => {
    // Periksa apakah user sudah login berdasarkan data di localStorage
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={`navbar ${isBlurred ? 'blurred' : ''}`}>
      <div className="brand-container">
        <div className="logo-container">
          <img src={Logo}  linkto="/home "alt="Logo" href="/homepage" className="logo" />
        </div>
        <div className="brand">EV-Ketos</div>
      </div>
      {isLoggedIn ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={routeChange}>
          Login
        </button>
      )}

      {/* Komponen Notifikasi Logout */}
      {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <h1>LOGOUT CONFIRM</h1>
          <p >Kamu Yakin?</p>
          <button onClick={() => confirmLogout(true)}>ya</button>
          <button onClick={() => confirmLogout(false)}>Tidak</button>
        </div>
      )}

      {showLogoutNotification && (
        <div className="logout-notification">
          <h1>Logout Berhasil</h1>
          <p>Anda telah berhasil logout dari aplikasi.</p>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
