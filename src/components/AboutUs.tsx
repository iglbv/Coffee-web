import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import default_profile_picture from '../assets/img/default_profile_picture.jpg';
import { Link } from "react-router-dom";

const useAboutUsData = () => {
    const teamMembers = [
        {
            name: 'Виолетта Черноусова',
            role: 'Бариста',
            photo: default_profile_picture,
        },
        {
            name: 'Олег Бабков',
            role: 'Менеджер',
            photo: default_profile_picture,
        },
    ];

    const sections = [
        {
            title: "О нас",
            content: (
                <>
                    <p className="text-center text-xl font-bold mb-4 text-light-text">Добро пожаловать в кофейню "Радиоволна"!</p>
                    <p className="text-center text-text">Мы - команда страстных кофеманов, которые стремятся делиться любовью к кофе и создавать уютную атмосферу для студентов и преподавателей!</p>
                    <div className="mt-8 flex justify-center gap-6">
                        <Link to="/about-us/contacts" className="bg-accent hover:bg-text transition duration-300 ease-in-out px-6 py-4 text-light-text rounded-md">
                            Контакты
                        </Link>
                        <Link to="/about-us/feedback" className="bg-accent hover:bg-text transition duration-300 ease-in-out px-6 py-4 text-light-text rounded-md">
                            Отзывы
                        </Link>
                    </div>
                </>
            ),
        },
        {
            title: "История",
            content: (
                <>
                    <p className="text-center text-text">Кофейня была основана с целью создать уютное пространство для студентов и преподавателей.<br />
                        Здесь рождаются новые идеи, завязываются знакомства и создаются незабываемые воспоминания.</p>
                </>
            ),
        },
        {
            title: "Наша миссия",
            content: (
                <>
                    <p className="text-center text-text">Мы стремимся создать уютное и вдохновляющее пространство.<br />
                        Наша цель - поддерживать студенческое сообщество и соединять поколения.<br />
                        Кофейня "Радиоволна" - это место для общения и роста!</p>
                </>
            ),
        },
        {
            title: "Наша команда",
            content: (
                <div className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="team-member rounded-lg shadow-md p-6 bg-secondary">
                            <img className="team-photo rounded-full mx-auto" src={member.photo} alt={member.name} />
                            <h3 className="text-xl font-bold mt-4 text-center text-light-text">{member.name}</h3>
                            <p className="text-text text-center mt-2">{member.role}</p>
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        centerMode: true,
        centerPadding: '50px',
    };

    return { teamMembers, sections, settings };
};

const AboutUs: React.FC = () => {
    const { sections, settings } = useAboutUsData();

    return (
        <div className="about-us-container">
            <Slider {...settings}>
                {sections.map((section) => (
                    <div key={section.title} className="about-us-section">
                        <div className="container">
                            <h2 className="text-3xl font-bold mb-4 text-center">
                                {section.title}
                            </h2>
                            <div className="content">
                                <p className="text-light-text">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AboutUs;