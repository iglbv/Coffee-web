import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl font-medium mt-4">Страница не найдена</h2>
      <p className="mt-4 text-lg">
        К сожалению, страница, которую вы ищете, не найдена.
      </p>
      <Link to="/" className="mt-8 px-6 py-3 bg-gold text-white rounded-md hover:bg-coffee focus:outline-none focus:ring-2 focus:ring-gold">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;