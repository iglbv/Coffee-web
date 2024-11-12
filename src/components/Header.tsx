import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
    };

    return (
        <header className="bg-primary text-light-text py-1 px-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/coffee-shop" className="text-2xl font-bold hover:text-accent">
                    <h1 className="text-2xl font-bold">Coffee Shop Radiovolna</h1>
                </Link>
                {localStorage.getItem('token') ? (
                    <nav className="flex items-center space-x-4">
                        {username && (
                            <span>
                                Привет, {username}!
                            </span>
                        )}
                        <Link to="/coffee-shop" className="hover:underline hover:text-accent">
                            Кофейня
                        </Link>
                        <Link to="/about-us" className="hover:underline hover:text-accent">
                            О нас
                        </Link>
                        <span onClick={handleLogout} className="hover:underline hover:text-accent cursor-pointer">
                            Выйти
                        </span>
                    </nav>
                ) : (
                    <></>
                )}
            </div>
        </header>
    );
};

export default Header;