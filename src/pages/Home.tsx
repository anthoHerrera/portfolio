import React, { useEffect } from "react";
import "../css/Home.scss";

function Home() {
    useEffect(() => {
        document.title = "Portfolio | Home";
    });
    return (
        <React.Fragment>
            <div className="home__container">
                <div className="info">
                    <div className="greeting">Hi I'm Anthony Herrera</div>
                    <div className="making">Computer Science Engineer</div>
                    <p>
                        I am interested in Software developer and Front-end Web
                        Developer but in the future I want to learn others
                        things like Back-end Web development, Artificial
                        Intelligence.
                    </p>
                </div>
                <div className="image__container">
                    <img
                        src={require("/src/assets/images/photo_carnet.jpg")}
                        alt="user_photo"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
