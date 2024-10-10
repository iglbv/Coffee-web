import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingForm from './components/GreetingForm';
import CoffeeShop from './components/CoffeeShop';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [name, setName] = useState("");

  const handleSubmit = (values: { name: string }) => {
    setName(values.name);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header name={name} />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<GreetingForm handleSubmit={handleSubmit} />} />
            <Route path="/coffee-shop" element={<CoffeeShop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


