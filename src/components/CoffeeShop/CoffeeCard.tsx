import React, { useRef, useState } from 'react';
import { Coffee, Topping, toppings } from '../../models/CoffeeData';

interface CoffeeCardProps {
    coffee: Coffee;
    addToCart: (coffee: Coffee, size: string, selectedToppings: Topping[]) => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, addToCart }) => {
    const [selectedSize, setSelectedSize] = useState(coffee.sizes[0].name);
    const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
    const addToCartButtonRef = useRef<HTMLButtonElement>(null);

    const handleAddToCart = () => {
        addToCart(coffee, selectedSize, selectedToppings);
        if (addToCartButtonRef.current) {
            addToCartButtonRef.current.classList.add('add-to-cart-animation');
            setTimeout(() => {
                addToCartButtonRef.current?.classList.remove('add-to-cart-animation');
            }, 500);
        }
    };

    return (
        <div
            className="coffee-card rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
        >
            <img
                src={coffee.image}
                alt={coffee.name}
                className="coffee-image rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">
                {coffee.name}
            </h3>
            <div className="coffee-description text-gray-600 mt-2">
                <p>{coffee.description}</p>
            </div>
            <p className="mt-2 font-bold text-lg">
                Цена: {coffee.sizes[0].price}₽
            </p>
            <div className="mt-2">
                <select
                    className="form-select appearance-none block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none focus:shadow-outline"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
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
                        <div key={toppingIndex} className="flex items-center mr-2 mb-2">
                            <input
                                type="checkbox"
                                id={`${coffee.name}-topping-${toppingIndex}`}
                                checked={selectedToppings.includes(topping)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedToppings([...selectedToppings, topping]);
                                    } else {
                                        setSelectedToppings(
                                            selectedToppings.filter((t) => t !== topping)
                                        );
                                    }
                                }}
                            />
                            <label
                                htmlFor={`${coffee.name}-topping-${toppingIndex}`}
                                className="text-gray-600"
                            >
                                {topping.name}{' '}
                                {topping.price > 0 && `(+${topping.price}₽)`}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    ref={addToCartButtonRef}
                    className="px-4 py-2 bg-accent text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent"
                    onClick={handleAddToCart}
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;