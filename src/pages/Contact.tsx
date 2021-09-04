import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import "../css/Contact.scss";

function Contact() {
    useEffect(() => {
        document.title = "Portfolio | Contact";
    });

    return (
        <React.Fragment>
            <div className="contact__container">
                <h1>Contact me</h1>
                <hr />
                <section className="container__icons">
                    <div className="info__icon">
                        <IoLocationSharp className="icon" />
                        <p>Guayaquil, Guayas, Ecuador</p>
                    </div>
                    <div className="info__icon">
                        <MdPhone className="icon" />
                        <p> +593 993107024</p>
                    </div>
                    <div className="info__icon">
                        <FaEnvelope className="icon" />
                        <p> ankeherr@espol.edu.ec | ankehecr100@gmail.com</p>
                    </div>
                </section>

                <h1>Follow me</h1>
                <hr />
                <section className="code__accounts">
                    <div className="social__icon">
                        <a
                            href="https://github.com/anthoHerrera"
                            title="Github"
                            target="_blank"
                        >
                            <FaGithub className="icon__github" />
                        </a>
                    </div>
                    <div className="social__icon">
                        <a
                            href="https://www.codewars.com/users/anthoHerrera"
                            title="Codewars"
                            target="_blank"
                        >
                            <SiCodewars className="icon__codewars" />
                        </a>
                    </div>
                    <div className="social__icon">
                        <a
                            href="https://www.linkedin.com/in/anthony-herrera-cruz-43b620172/"
                            title="Linkedin"
                            target="_blank"
                        >
                            <FaLinkedin className="icon__linkedlin" />
                        </a>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Contact;
