
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...props }) => {
  
  const isAuthenticated = true; // Gantilah dengan kondisi autentikasi yang sesuai

  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/Login" replace />
  );
};

export default PrivateRoute;
