import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoffeeShop from './components/CoffeeShop/CoffeeShop';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Contacts from './components/Contacts';
import Feedback from './components/Feedback';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<CoffeeShop />} />
            <Route path="/coffee-shop" element={<CoffeeShop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/contacts" element={<Contacts />} />
            <Route path="/about-us/feedback" element={<Feedback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;