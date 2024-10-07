import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingForm from './GreetingForm';
import CoffeeShop from './CoffeeShop';

const App: React.FC = () => {
  const [name, setName] = useState("");

  const handleSubmit = (values: { name: string }) => {
    setName(values.name);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GreetingForm handleSubmit={handleSubmit} />} />
        <Route path="/coffee-shop" element={<CoffeeShop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 
