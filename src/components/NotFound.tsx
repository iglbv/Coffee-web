import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-light-text">
      <h1 className="text-7xl font-bold text-accent">404</h1>
      <h2 className="text-4xl font-medium mt-4">Страница не найдена</h2>
      <p className="mt-4 text-lg">
        К сожалению, страница, которую вы ищете, не найдена.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-accent text-light-text rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;