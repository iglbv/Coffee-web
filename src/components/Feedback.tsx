import React, { FormEvent, useState } from 'react';
import default_profile_picture from '../assets/img/default_profile_picture.jpg';

const Feedback: React.FC = () => {
    const [feedback, setFeedback] = useState('');
    const [reviews, setReviews] = useState<any[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (feedback.trim() !== '') {
            setReviews([
                ...reviews,
                {
                    text: feedback,
                },
            ]);
            setFeedback('');
        } else {
            alert("Вы ничего не написали!");
        }
    };

    const handleDeleteReview = (index: number) => {
        setReviews(reviews.filter((_, i) => i !== index));
    };

    return (
        <div className="about-us-container bg-primary text-light-text p-8 pb-20">
            <h2 className="text-3xl font-bold mb-4 text-accent">Отзывы</h2>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Оставьте отзыв</h3>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full rounded-md p-4 text-text bg-secondary"
                        rows={6}
                    />

                    <button
                        type="submit"
                        className="bg-accent hover:bg-green px-6 py-4 text-light-text rounded-md mt-4"
                    >
                        Отправить
                    </button>
                </form>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Отзывы</h3>
                <ul className="list-disc pl-4 text-light-text text-lg max-h-64 overflow-y-auto">
                    {reviews.map((review, index) => (
                        <li key={index} className="flex items-center gap-4 mb-4">
                            <img
                                src={default_profile_picture}
                                alt="Profile Picture"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <strong>{'Неизвестный пользователь'}:</strong> {review.text}
                                <button
                                    className="ml-4 text-light-text hover:bg-red px-2 py-1 rounded"
                                    onClick={() => handleDeleteReview(index)}
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Feedback;