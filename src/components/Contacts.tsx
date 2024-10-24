import React from 'react';

const Contacts: React.FC = () => {
    return (
        <div className="bg-primary text-light-text p-8 min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold mb-8 text-accent">Контакты</h2>

            <div className="w-full max-w-lg">
                <div className="flex gap-6 mb-8">
                    <a
                        href="https://t.me/ilyaglbv"
                        className="bg-accent hover:bg-text transition duration-300 ease-in-out px-8 py-4 text-light-text rounded-md text-lg"
                    >
                        Телеграм
                    </a>
                    <a
                        href="https://vk.com/iglbv"
                        className="bg-accent hover:bg-text transition duration-300 ease-in-out px-8 py-4 text-light-text rounded-md text-lg"
                    >
                        Вконтакте
                    </a>
                </div>

                <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-4 text-accent">Адрес</h3>
                    <p className="text-light-text text-lg">РТФ, Мира 32</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-4 text-accent">Часы работы</h3>
                    <ul className="list-disc pl-4 text-light-text text-lg">
                        <li>Понедельник - Пятница: 10:00 - 20:00</li>
                        <li>Суббота: 10:00 - 16:00</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contacts;