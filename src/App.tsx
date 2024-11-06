import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GreetingForm from './components/GreetingForm';
import CoffeeShop from './components/CoffeeShop/CoffeeShop';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Contacts from './components/Contacts';
import Feedback from './components/Feedback';

const App: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (values: { name: string }) => {
    setName(values.name);
    localStorage.setItem('userName', values.name);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route
              path="/"
              element={localStorage.getItem('userName') ? (
                <Navigate to="/coffee-shop" replace />
              ) : (
                <GreetingForm handleSubmit={handleSubmit} />
              )}
            />
            <Route
              path="/coffee-shop"
              element={localStorage.getItem('userName') ? (
                <CoffeeShop />
              ) : (
                <Navigate to="/" replace />
              )}
            />
            <Route
              path="/about-us"
              element={localStorage.getItem('userName') ? (
                <AboutUs />
              ) : (
                <Navigate to="/" replace />
              )}
            />
            <Route
              path="/about-us/contacts"
              element={localStorage.getItem('userName') ? (
                <Contacts />
              ) : (
                <Navigate to="/" replace />
              )}
            />
            <Route
              path="/about-us/feedback"
              element={localStorage.getItem('userName') ? (
                <Feedback />
              ) : (
                <Navigate to="/" replace />
              )}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;