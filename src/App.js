import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { Login } from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import NotFound from './components/notFound/NotFound';
import Register from './components/register/register'; 


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? <DataProvider>{children}</DataProvider> : <Navigate replace to="/login" />;
};

export default App;
