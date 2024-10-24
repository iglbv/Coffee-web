import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.removeItem('userName');
        window.location.reload();
    };

    return (
        <header className="bg-primary text-light-text py-1 px-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/coffee-shop" className="text-2xl font-bold hover:text-accent">
                    <h1 className="text-2xl font-bold">Coffee Shop Radiovolna</h1>
                </Link>
                <nav className="flex items-center space-x-4">
                    {userName ? (
                        <>
                            <p className="text-lg">Привет, {userName}!</p>
                            <Link to="/coffee-shop"
                                className="text-gold hover:underline hover:text-accent">
                                Кофейня
                            </Link>
                            <Link to="/about-us"
                                className="text-gold hover:underline hover:text-accent">
                                О нас
                            </Link>
                            <Link to="/" onClick={handleLogout}
                                className="text-gold hover:underline hover:text-accent">
                                Выйти
                            </Link>
                        </>
                    ) : (
                        <></>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;