import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Topping, coffees, toppings } from '../models/CoffeeData.tsx';

const CoffeeShop = () => {
  const [cart, setCart] = useState<{
    coffee: Coffee;
    size: string;
    toppings: Topping[];
    quantity: number;
  }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const addToCart = (coffee: Coffee, size: string, selectedToppings: Topping[]) => {
    const existingItem = cart.find(
      (item) =>
        item.coffee.name === coffee.name &&
        item.size === size &&
        JSON.stringify(item.toppings) === JSON.stringify(selectedToppings)
    );
    if (existingItem) {
      if (existingItem.quantity < 100) {
        setCart(
          cart.map((item) =>
            item.coffee.name === coffee.name &&
              item.size === size &&
              JSON.stringify(item.toppings) === JSON.stringify(selectedToppings)
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        alert(
          `Максимальное количество ${coffee.name} с выбранными добавками в корзине - 100`
        );
      }
    } else {
      setCart([...cart, { coffee, size, toppings: selectedToppings, quantity: 1 }]);
    }
  };

  const removeFromCart = (
    coffeeName: string,
    size: string,
    selectedToppings: Topping[]
  ) => {
    setCart(
      cart.filter(
        (item) =>
          item.coffee.name !== coffeeName ||
          item.size !== size ||
          JSON.stringify(item.toppings) !== JSON.stringify(selectedToppings)
      )
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Ваша корзина пуста!');
      return;
    }
    setCart([]);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 bg-secondary text-text">
      <h1 className="text-3xl font-bold text-accent mb-4 text-center">
        Наш ассортимент
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="coffee-card rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="coffee-image rounded-lg"
            />
            <h3 className="text-xl font-bold text-coffee mt-4">
              {coffee.name}
            </h3>
            <div className="coffee-description text-gray-600 mt-2">
              <p>{coffee.description}</p>
            </div>
            <p className="mt-2 font-bold text-lg">Цена: {coffee.sizes[0].price}₽</p>
            <div className="mt-2">
              <select
                className="form-select appearance-none block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none focus:shadow-outline"
                name={`${coffee.name}-size`}
              >
                {coffee.sizes.map((size, sizeIndex) => (
                  <option key={sizeIndex} value={size.name}>
                    {size.name} - {size.price}₽
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-2">
              <label htmlFor={`${coffee.name}-toppings`} className="mr-2">
                Добавки:
              </label>
              <div className="flex flex-wrap">
                {toppings.map((topping, toppingIndex) => (
                  <div
                    key={toppingIndex}
                    className="flex items-center mr-2 mb-2"
                  >
                    <input
                      type="checkbox"
                      id={`${coffee.name}-topping-${toppingIndex}`}
                      className="mr-1"
                    />
                    <label
                      htmlFor={`${coffee.name}-topping-${toppingIndex}`}
                      className="text-gray-600"
                    >
                      {topping.name} {topping.price > 0 && `(+${topping.price}₽)`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => {
                  const selectedSize = document.querySelector(
                    `select[name="${coffee.name}-size"]`
                  ) as HTMLSelectElement;
                  const selectedToppings: Topping[] = [];
                  toppings.forEach((topping, toppingIndex) => {
                    const checkbox = document.getElementById(
                      `${coffee.name}-topping-${toppingIndex}`
                    ) as HTMLInputElement;
                    if (checkbox && checkbox.checked) {
                      selectedToppings.push(topping);
                    }
                  });
                  if (selectedSize) {
                    addToCart(coffee, selectedSize.value, selectedToppings);
                  }
                }}
              >
                Добавить
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 px-4 py-2 bg-gold text-white rounded-md hover:bg-coffee focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Открыть корзину
        </button>
      )}

      {isCartOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-coffee mb-2">
              Ваша корзина:
            </h2>
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-300 hover:bg-gray-400"
              onClick={() => setIsCartOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {cart.length > 0 ? (
              <ul className="list-none p-0">
                {cart.map((item) => (
                  <li
                    key={`${item.coffee.name}-${item.size}-${JSON.stringify(
                      item.toppings
                    )}`}
                    className="flex justify-between items-center py-2 border-b border-gray-200"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.coffee.image}
                        alt={item.coffee.name}
                        className="w-12 h-12 object-cover rounded-md mr-3"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item.coffee.name} ({item.size})
                        </h3>
                        <p className="text-gray-600">
                          {item.quantity} шт.
                        </p>
                        {item.toppings.length > 0 && (
                          <p className="text-gray-600">
                            Добавки:
                            {item.toppings
                              .map((topping) => topping.name)
                              .join(', ')}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold">
                        {(
                          item.coffee.sizes.find((s) => s.name === item.size)!.price +
                          item.toppings.reduce((acc, topping) => acc + topping.price, 0)
                        ) * item.quantity}
                        ₽
                      </p>
                      <button
                        onClick={() =>
                          removeFromCart(item.coffee.name, item.size, item.toppings)
                        }
                        className="bg-red text-white font-bold py-1 px-2 rounded-md ml-2"
                      >
                        Удалить
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Корзина пуста.</p>
            )}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">
                Итого: {cart.reduce(
                  (sum, item) => {
                    const basePrice = item.coffee.sizes.find((s) => s.name === item.size)!.price;
                    const toppingPrice = item.toppings.reduce((acc, topping) => acc + topping.price, 0);
                    return sum + (basePrice + toppingPrice) * item.quantity;
                  },
                  0
                )}₽
              </p>
              <button
                onClick={handleCheckout}
                className="bg-green text-white font-bold py-2 px-4 rounded-md ml-4"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeShop;