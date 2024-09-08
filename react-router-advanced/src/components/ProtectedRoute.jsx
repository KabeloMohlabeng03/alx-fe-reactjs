import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the custom hook

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Use the custom hook to get auth status

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
