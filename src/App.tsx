import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CoffeeShop from './components/CoffeeShop/CoffeeShop';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Contacts from './components/Contacts';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !isLoggedIn) {
      setIsLoggedIn(true);
    } else if (!storedToken && isLoggedIn) {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const UnauthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
    return !isLoggedIn ? children : <Navigate to="/coffee-shop" />;
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<ProtectedRoute><CoffeeShop /></ProtectedRoute>} />
            <Route path="/coffee-shop" element={<ProtectedRoute><CoffeeShop /></ProtectedRoute>} />
            <Route path="/about-us" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
            <Route path="/about-us/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
            <Route path="/about-us/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
            <Route path="/login" element={<UnauthenticatedRoute><Login setIsLoggedIn={setIsLoggedIn} /></UnauthenticatedRoute>} />
            <Route path="/register" element={<UnauthenticatedRoute><Register /></UnauthenticatedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;