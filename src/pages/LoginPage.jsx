import React, { useState } from "react";
import '../dist/css/index.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },   
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan status login di localStorage atau sesuai kebutuhan
        localStorage.setItem('isLoggedIn', 'true');
        setNotification({ type: 'success', message: 'Login berhasil' });
        navigate('/');
      } else {
        // Display notification for incorrect email or password
        setNotification({ type: 'error', message: 'Periksa kembali email atau password anda.' });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return ( 
    <>
    <div className="background">
      <section>
      <div className="auth">
        <div className="login-header">
          <button onClick={() => navigate('/')} className="back-button">
            {/* <FontAwesomeIcon icon={fa-circle-left} /> */}
          </button>
          <h1>Login</h1>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="on"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-hide-button"
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>

          {notification && (
            <div style={{ fontFamily: 'poppins' }} className={`notification ${notification.type}`}>
              <p>{notification.message}</p>
            </div>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
    </div>
    </>
  );
};

export default LoginPage;
