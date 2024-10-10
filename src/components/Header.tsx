import React from 'react';

const Header: React.FC<{ name: string }> = ({ name }) => {
    return (
        <header className="bg-coffee text-white py-1 px-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Coffee Shop UrFU-RTF</h1>
                {name && (
                    <p className="text-lg">Привет, {name}!</p>
                )}
            </div>
        </header>
    );
};

export default Header;
