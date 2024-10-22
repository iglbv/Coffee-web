import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface Props {
    handleSubmit: (values: { name: string }) => void;
}

const GreetingForm: React.FC<Props> = ({ handleSubmit }) => {
    const navigate = useNavigate();

    const handleLogin = (values: { name: string }) => {
        handleSubmit(values);
        localStorage.setItem('userName', values.name);
        navigate('/coffee-shop');
    };

    return (
        <div className="bg-white p-10 rounded-lg shadow-2xl mx-auto max-w-md flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 text-center">
                Добро пожаловать в нашу кофейню!
            </h1>
            <p className="text-lg mb-6 text-center">
                Как вас зовут?
            </p>

            <Formik
                initialValues={{ name: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Введите ваше имя!'),
                })}
                onSubmit={handleLogin}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col w-full">
                        <div className="flex flex-col w-full mb-4">
                            <label htmlFor="name" className=" mb-2 font-medium">
                                Ваше имя:
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-coffee text-gray-800 focus:ring-2 focus:ring-coffee focus:ring-opacity-50"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-coffee text-white px-6 py-3 rounded-md font-bold hover:bg-latte hover:text-white 
                focus:outline-none focus:ring-2 
                focus:ring-coffee focus:ring-opacity-50 disabled:opacity-50 transition duration-300 ease-in-out"
                            disabled={isSubmitting}
                        >
                            Хочу сделать заказ!
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default GreetingForm;