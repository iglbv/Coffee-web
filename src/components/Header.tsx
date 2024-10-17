import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{ name: string }> = ({ name }) => {
    return (
        <header className="bg-coffee text-white py-1 px-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/coffee-shop" className="text-2xl font-bold hover:text-gold">
                    <h1 className="text-2xl font-bold">Coffee Shop Radiovolna</h1>
                </Link>
                <nav className="flex items-center space-x-4">
                    <Link to="/coffee-shop"
                        className='hover:text-gold'>Кофейня</Link>
                    <Link to="/about-us" className='hover:text-gold'>О нас</Link>
                </nav>
                {name && (
                    <p className="text-lg">Привет, {name}!</p>
                )}
            </div>
        </header>
    );
};

export default Header;
