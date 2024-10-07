import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface Props {
    handleSubmit: (values: { name: string }) => void;
}

const GreetingForm: React.FC<Props> = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    return (
        <div className="bg-dust min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-2xl">
                <h1 className="text-3xl font-bold text-coffee mb-4">
                    Добро пожаловать в нашу кофейню!
                </h1>
                <p className="text-lg text-coffee mb-8">
                    Как вас зовут?
                </p>

                <Formik
                    initialValues={{ name: "" }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Введите ваше имя!'),
                    })}
                    onSubmit={(values) => {
                        handleSubmit(values);
                        navigate('/coffee-shop');
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col items-center">
                            <div className="flex flex-col w-full mb-4">
                                <label htmlFor="name" className="text-coffee mb-2">
                                    Ваше имя:
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-coffee" />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className='text-red-500 text-sm'
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-coffee text-white px-6 py-3 rounded-md font-bold hover:bg-latte 
                focus:outline-none focus:ring-2 
                focus:ring-cofee focus:ring-opacity-50 disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                Хочу сделать заказ!
                            </button>
                        </Form>
                    )}
                </Formik>

                {name && (
                    <p className="text-lg text-coffee mt-8">
                        Приятно познакомиться, {name}!
                    </p>
                )}
            </div>
        </div >
    )
}

export default GreetingForm;
