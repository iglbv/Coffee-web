import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import default_profile_picture from '../assets/img/default_profile_picture.jpg';

const AboutUs: React.FC = () => {
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
                    Добро пожаловать в кофейню "Радиоволна"!<br />
                    Мы - команда страстных кофеманов, которые стремятся делиться любовью к кофе и создавать уютную атмосферу для студентов и преподавателей!
                </>
            ),
        },
        {
            title: "История",
            content: (
                <>
                    Кофейня была основана с целью создать уютное пространство для студентов и преподавателей.<br />
                    Здесь рождаются новые идеи, завязываются знакомства и создаются незабываемые воспоминания.
                </>
            ),
        },
        {
            title: "Наша миссия",
            content: (
                <>
                    Мы стремимся создать уютное и вдохновляющее пространство.<br />
                    Наша цель - поддерживать студенческое сообщество и соединять поколения.<br />
                    Кофейня "Радиоволна" - это место для общения и роста!
                </>
            ),
        },
        {
            title: "Наша команда",
            content: (
                <div className="team-members">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="team-member">
                            <img className="team-photo" src={member.photo} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
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
        autoplaySpeed: 5000,
    };

    return (
        <div className="about-us-container">
            <Slider {...settings}>
                {sections.map((section, index) => (
                    <div key={index} className="about-us-section">
                        <h2>{section.title}</h2>
                        {section.content}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AboutUs;