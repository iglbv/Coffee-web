import React from 'react';
import { Coffee, Topping } from '../../models/CoffeeData';

interface CartItemProps {
    item: { coffee: Coffee; size: string; toppings: Topping[]; quantity: number };
    removeFromCart: (
        coffeeName: string,
        size: string,
        selectedToppings: Topping[]
    ) => void;
    itemPrice: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart, itemPrice }) => {
    const handleRemoveFromCart = () => {
        removeFromCart(item.coffee.name, item.size, item.toppings);
    };

    return (
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
                    <p className="text-gray-600">{item.quantity} шт.</p>
                    {item.toppings.length > 0 && (
                        <>
                            <p className="text-gray-600 mb-1">
                                Добавки:
                            </p>
                            <p className="text-gray-600">
                                {item.toppings.map((topping) => topping.name).join(', ')}
                            </p>
                        </>
                    )}
                    <p className="text-gray-600">Цена: {itemPrice}₽</p>
                </div>
            </div>
            <button
                className="px-4 py-2 bg-red text-white rounded-md"
                onClick={handleRemoveFromCart}
            >
                Удалить
            </button>
        </li>
    );
};

export default CartItem;