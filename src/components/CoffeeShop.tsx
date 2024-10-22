import React from 'react';
import espresso from '../assets/img/espresso.jpg'
import americano from '../assets/img/americano.jpeg'
import flat_white from '../assets/img/flat_white.jpg'
import cappuccino from '../assets/img/cappuccino.jpg'
import latte from '../assets/img/latte.jpg'
import raf from '../assets/img/raf.jpg'

interface Coffee {
    name: string;
    description: string;
    image: string
}

const coffees: Coffee[] = [
    {
        name: 'Эспрессо',
        description: 'Интенсивный и ароматный кофе, приготовленный из свежемолотых зерен',
        image: espresso
    },

    {
        name: 'Американо',
        description: 'Насыщенный кофе, полученный добавлением горячей воды к эспрессо, с мягким вкусом и глубоким ароматом',
        image: americano
    },

    {
        name: 'Флэт уайт',
        description: 'Эспрессо с тонкой микропенкой, создающий сбалансированный, насыщенный и сливочный вкус',
        image: flat_white
    },

    {
        name: 'Капучино',
        description: 'Классический кофе из равных частей эспрессо, горячего молока и микропенки, с легкой и воздушной текстурой',
        image: cappuccino
    },

    {
        name: 'Латте',
        description: 'Нежный напиток из эспрессо и теплого молока с легкой пенкой, гармоничное сочетание сладкого и кофейного вкуса',
        image: latte
    },

    {
        name: 'Раф',
        description: 'Уникальный кофе из эспрессо, горячего молока и ванильного сахара, придающий сладкий и обволакивающий вкус',
        image: raf
    },
]

const CoffeeShop = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-coffee mb-4 text-center">Наш ассортимент</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coffees.map((coffee, index) => (
                    <div key={index} className="coffee-card rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                        <img src={coffee.image} alt={coffee.name} className="coffee-image rounded-lg" />
                        <h3 className="text-xl font-bold text-coffee mt-4">{coffee.name}</h3>
                        <p className="text-gray-600 mt-2">{coffee.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoffeeShop;