import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login: React.FC<{ setIsLoggedIn: (isLoggedIn: boolean) => void }> = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setUsernameError('');
        setPasswordError('');

        if (username.length < 3 || username.length > 30) {
            setUsernameError('Имя пользователя должно быть от 3 до 30 символов.');
            return;
        }

        if (password.length < 8 || password.length > 30) {
            setPasswordError('Пароль должен быть от 8 до 30 символов.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/users?username=${username}`);
            if (!response.ok) {
                setUsernameError('Пользователь не найден.');
                return;
            }

            const user = await response.json();

            if (user.length === 0) {
                setUsernameError('Пользователь не найден.');
                return;
            }

            if (user[0].password === password) {
                const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                localStorage.setItem('token', token);
                localStorage.setItem('username', user[0].username);
                setIsLoggedIn(true);
                navigate('/');
            } else {
                setPasswordError('Неверный пароль.');
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            setUsernameError('Ошибка авторизации.');
        }
    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
            <div className="bg-secondary p-12 rounded-lg shadow-2xl mx-auto max-w-md flex flex-col items-center text-text">
                <h1 className="text-3xl font-bold text-accent mb-6">
                    Вход
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <div className="flex flex-col w-full mb-4">
                        <label htmlFor="username" className=" mb-2 font-medium">
                            Имя пользователя:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-coffee text-gray-800 focus:ring-2 focus:ring-coffee focus:ring-opacity-50"
                        />
                        {usernameError && <p className="text-red text-sm mt-1">{usernameError}</p>}
                    </div>

                    <div className="flex flex-col w-full mb-4">
                        <label htmlFor="password" className=" mb-2 font-medium">
                            Пароль:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-coffee text-gray-800 focus:ring-2 focus:ring-coffee focus:ring-opacity-50"
                        />
                        {passwordError && <p className="text-red text-sm mt-1">{passwordError}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-accent text-light-text px-6 py-3 rounded-md font-bold hover:bg-primary hover:text-light-text focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 transition duration-300 ease-in-out"
                    >
                        Войти
                    </button>
                    <div className="mt-4 text-center">
                        <p>Нет аккаунта? <Link to="/register" className="text-accent font-medium hover:underline">Зарегистрируйтесь</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;