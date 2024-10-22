import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GreetingForm from './components/GreetingForm';
import CoffeeShop from './components/CoffeeShop';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (values: { name: string }) => {
    setName(values.name);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route
              path="/" element={localStorage.getItem('userName') ? (
                <Navigate to="/coffee-shop" replace />
              ) : (
                <GreetingForm handleSubmit={handleSubmit} />
              )
              }
            />
            <Route
              path="/coffee-shop" element={localStorage.getItem('userName') ? (
                <CoffeeShop />
              ) : (
                <Navigate to="/" replace />
              )
              }
            />
            <Route
              path="/about-us" element={localStorage.getItem('userName') ? (
                <AboutUs />
              ) : (
                <Navigate to="/" replace />
              )
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;