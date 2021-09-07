import React, { useEffect } from "react";
import Skill from "./Skill";
import Technology from "./Technology";
import "../css/About.scss";

const skills = [
    { name: "Front-end", percent: 75 },
    { name: "Back-end", percent: 50 },
    { name: "Algorithms", percent: 80 },
];

const technologies = [
    {
        text: "Javascript logo",
        percent: 75,
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    },
    {
        text: "HTML",
        percent: 70,
        url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
    },
    {
        text: "React",
        percent: 60,
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    },
    {
        text: "Python",
        percent: 55,
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
    },
    {
        text: "Java",
        percent: 50,
        url: "https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/ed5569e8-c0dd-458c-8450-cde6300093bd/File/a5023b0f0fb67f59176a0499af9021ed/java_horz_clr.png",
    },
    {
        text: "CSS",
        percent: 50,
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
        text: "SASS",
        percent: 40,
        url: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png",
    },
    {
        text: "Typescript",
        percent: 40,
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },

    {
        text: "Node JS",
        percent: 40,
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        text: "MongoDB",
        percent: 30,
        url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
        text: "SQL",
        percent: 40,
        url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
];

function About() {

    useEffect(() => {
        document.title = "Portfolio | About";
    });
    
    return (
        <React.Fragment>
            <div className="about__container">
                <div className="me__container">
                    <h1>Anthony Herrera</h1>
                    <hr />
                    <p>
                        I'm a Computer Science Engineer, everyday I practice my
                        programming skills at{" "}
                        <a
                            href="http://codewars.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            codewars
                        </a>{" "}
                        generally I practice programming languages like java,
                        javascript, python and typescript because I think is
                        important keep going with new technologies, considering
                        that the world of programming is constantly updated; so
                        I'm always open to learn new languages or frameworks
                        like React.
                    </p>
                </div>
                <section className="skills__container">
                    <h1>My Skills</h1>
                    <hr />
                    {skills.map((skill, idx) => (
                        <Skill
                            key={idx}
                            name={skill.name}
                            percent={skill.percent}
                        />
                    ))}
                </section>
                <div className="technologies__container">
                    <h1>Technologies</h1>
                    <hr />
                    <section className="tech__contain">
                        {technologies.map((tech, idx) => (
                            <Technology
                                key={idx}
                                text={tech.text}
                                percent={tech.percent}
                                image_url={tech.url}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;
