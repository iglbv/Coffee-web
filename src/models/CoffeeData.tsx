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
    sizes: {
        name: string;
        price: number;
    }[];
}

interface Topping {
    name: string;
    price: number;
}

const coffees: Coffee[] = [
    {
        name: 'Эспрессо',
        description: 'Интенсивный и ароматный кофе, приготовленный из свежемолотых зерен',
        image: espresso,
        price: 95,
        sizes: [
            { name: 'Маленький', price: 95 },
            { name: 'Средний', price: 110 },
            { name: 'Большой', price: 125 },
        ],
    },
    {
        name: 'Американо',
        description:
            'Насыщенный кофе, полученный добавлением горячей воды к эспрессо, с мягким вкусом и глубоким ароматом',
        image: americano,
        price: 140,
        sizes: [
            { name: 'Маленький', price: 140 },
            { name: 'Средний', price: 155 },
            { name: 'Большой', price: 170 },
        ],
    },
    {
        name: 'Флэт уайт',
        description:
            'Эспрессо с тонкой микропенкой, создающий сбалансированный, насыщенный и сливочный вкус',
        image: flat_white,
        price: 165,
        sizes: [
            { name: 'Маленький', price: 165 },
            { name: 'Средний', price: 180 },
            { name: 'Большой', price: 195 },
        ],
    },
    {
        name: 'Капучино',
        description:
            'Классический кофе из равных частей эспрессо, горячего молока и микропенки, с легкой и воздушной текстурой',
        image: cappuccino,
        price: 165,
        sizes: [
            { name: 'Маленький', price: 165 },
            { name: 'Средний', price: 180 },
            { name: 'Большой', price: 195 },
        ],
    },
    {
        name: 'Латте',
        description:
            'Нежный напиток из эспрессо и теплого молока с легкой пенкой, гармоничное сочетание сладкого и кофейного вкуса',
        image: latte,
        price: 170,
        sizes: [
            { name: 'Маленький', price: 170 },
            { name: 'Средний', price: 185 },
            { name: 'Большой', price: 200 },
        ],
    },
    {
        name: 'Раф',
        description:
            'Уникальный кофе из эспрессо, горячего молока и ванильного сахара, придающий сладкий и обволакивающий вкус',
        image: raf,
        price: 185,
        sizes: [
            { name: 'Маленький', price: 185 },
            { name: 'Средний', price: 200 },
            { name: 'Большой', price: 215 },
        ],
    },
];

const toppings: Topping[] = [
    { name: 'Сироп', price: 15, },
    { name: 'Молоко', price: 10, },
    { name: 'Маршмеллоу', price: 10 },
    { name: 'Корица', price: 0 },
    { name: 'Сахар', price: 0 },
];

export { coffees, toppings };   
export type { Coffee, Topping };