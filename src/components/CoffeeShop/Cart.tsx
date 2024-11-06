import React, { useState } from 'react';
import { Coffee, Topping } from '../../models/CoffeeData';
import CartItem from './CartItem';

const calculateItemPrice = (item: { coffee: Coffee; size: string; toppings: Topping[]; quantity: number }) => {
    const selectedSize = item.coffee.sizes.find((size) => size.name === item.size);
    const toppingPrice = item.toppings.reduce((total, topping) => total + topping.price, 0);
    return (selectedSize?.price || 0) + toppingPrice;
};

interface CartProps {
    cart: { coffee: Coffee; size: string; toppings: Topping[]; quantity: number }[];
    removeFromCart: (
        coffeeName: string,
        size: string,
        selectedToppings: Topping[]
    ) => void;
    handleCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, handleCheckout }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    const totalCartPrice = cart.reduce((total, item) => {
        const itemPrice = calculateItemPrice(item);
        return total + itemPrice * item.quantity;
    }, 0);

    return (
        <div>
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
                    onClick={handleCloseCart}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold text-coffee mb-2">
                            Ваша корзина:
                        </h2>
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-300 hover:bg-gray-400"
                            onClick={handleCloseCart}
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
                                    <CartItem
                                        key={`${item.coffee.name}-${item.size}-${JSON.stringify(
                                            item.toppings
                                        )}`}
                                        item={item}
                                        removeFromCart={removeFromCart}
                                        itemPrice={calculateItemPrice(item)}
                                    />
                                ))}
                                <p className="text-gray-600 mt-4 text-right">
                                    Итого: {totalCartPrice}₽
                                </p>
                            </ul>
                        ) : (
                            <p className="text-gray-600 mr-10">Ваша корзина пуста.</p>
                        )}
                        <div className="mt-4 flex justify-center">
                            <button
                                className="px-4 py-2 bg-green text-white rounded-md"
                                onClick={handleCheckout}
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

export default Cart;