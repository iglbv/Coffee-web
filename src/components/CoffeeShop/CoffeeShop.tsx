import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Topping, coffees } from '../../models/CoffeeData';
import CoffeeCard from './CoffeeCard';
import Cart from './Cart';

const CoffeeShop: React.FC = () => {
  const [cart, setCart] = useState<{ coffee: Coffee; size: string; toppings: Topping[]; quantity: number }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (coffee: Coffee, size: string, selectedToppings: Topping[]) => {
    const existingItem = cart.find(
      (item) =>
        item.coffee.name === coffee.name &&
        item.size === size &&
        JSON.stringify(item.toppings) === JSON.stringify(selectedToppings)
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.coffee.name === coffee.name &&
            item.size === size &&
            JSON.stringify(item.toppings) ===
            JSON.stringify(selectedToppings)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { coffee, size, toppings: selectedToppings, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (coffeeName: string, size: string, selectedToppings: Topping[]) => {
    setCart(
      cart.filter(
        (item) =>
          item.coffee.name !== coffeeName ||
          item.size !== size ||
          JSON.stringify(item.toppings) !==
          JSON.stringify(selectedToppings)
      )
    );
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Ваша корзина пуста!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart),
      });

      if (response.ok) {
        console.log('Заказ отправлен успешно!');
        setCart([]);
        navigate('/');
      } else {
        throw new Error(`Ошибка отправки заказа: ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка отправки заказа:', error);
      alert('Ошибка отправки заказа. Пожалуйста, попробуйте снова.');
    }
  };

  useEffect(() => {
    saveCartToLocalStorage();
  }, [cart]);

  return (
    <div className="container mx-auto px-4 bg-secondary text-text">
      <h1 className="text-3xl font-bold text-accent mb-4 text-center">
        Наш ассортимент
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee, index) => (
          <CoffeeCard
            key={index}
            coffee={coffee}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

export default CoffeeShop;