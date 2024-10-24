import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import espresso from '../assets/img/espresso.jpg';
import americano from '../assets/img/americano.jpeg';
import flat_white from '../assets/img/flat_white.jpg';
import cappuccino from '../assets/img/cappuccino.jpg';
import latte from '../assets/img/latte.jpg';
import raf from '../assets/img/raf.jpg';


interface Coffee {
    name: string;
    description: string;
    image: string;
    price: number;
}

const coffees: Coffee[] = [
    {
        name: 'Эспрессо',
        description: 'Интенсивный и ароматный кофе, приготовленный из свежемолотых зерен',
        image: espresso,
        price: 95,
    },
    {
        name: 'Американо',
        description:
            'Насыщенный кофе, полученный добавлением горячей воды к эспрессо, с мягким вкусом и глубоким ароматом',
        image: americano,
        price: 140,
    },
    {
        name: 'Флэт уайт',
        description:
            'Эспрессо с тонкой микропенкой, создающий сбалансированный, насыщенный и сливочный вкус',
        image: flat_white,
        price: 165,
    },
    {
        name: 'Капучино',
        description:
            'Классический кофе из равных частей эспрессо, горячего молока и микропенки, с легкой и воздушной текстурой',
        image: cappuccino,
        price: 165,
    },
    {
        name: 'Латте',
        description:
            'Нежный напиток из эспрессо и теплого молока с легкой пенкой, гармоничное сочетание сладкого и кофейного вкуса',
        image: latte,
        price: 170,
    },
    {
        name: 'Раф',
        description:
            'Уникальный кофе из эспрессо, горячего молока и ванильного сахара, придающий сладкий и обволакивающий вкус',
        image: raf,
        price: 185,
    },
];

const CoffeeShop = () => {
    const [cart, setCart] = useState<{ coffee: Coffee; quantity: number }[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();

    const addToCart = (coffee: Coffee) => {
        const existingItem = cart.find((item) => item.coffee.name === coffee.name);
        if (existingItem) {
            if (existingItem.quantity < 100) {
                setCart(
                    cart.map((item) =>
                        item.coffee.name === coffee.name
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                alert(`Максимальное количество ${coffee.name} в корзине - 100`);
            }
        } else {
            setCart([...cart, { coffee, quantity: 1 }]);
        }
    };

    const removeFromCart = (coffeeName: string) => {
        setCart(cart.filter((item) => item.coffee.name !== coffeeName));
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Ваша корзина пуста!')
            return
        }
        setCart([]);
        navigate('/');
    };

    const totalCost = cart.reduce(
        (sum, item) => sum + item.coffee.price * item.quantity, 0
    );

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
                        <p className="text-lg font-bold mt-2">
                            Цена: {coffee.price}₽
                        </p>
                        <div className="mt-4 flex justify-center">
                            <button
                                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent; "
                                onClick={() => addToCart(coffee)}
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
                                        key={item.coffee.name}
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
                                                    {item.coffee.name}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {item.quantity} шт.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">
                                                {item.coffee.price *
                                                    item.quantity}
                                                ₽
                                            </p>
                                            <button
                                                onClick={() =>
                                                    removeFromCart(
                                                        item.coffee.name
                                                    )
                                                }
                                                className="bg-red-500 text-white font-bold py-1 px-2 rounded-md ml-2"
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
                                Итого: {totalCost}₽
                            </p>
                            <button
                                onClick={handleCheckout}
                                className="bg-green-500 text-white font-bold py-2 px-4 rounded-md"
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