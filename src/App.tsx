import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.scss";

function App() {
    return (
        <Router>
            <div id="app">
                <header className="header__app">
                    <div className="logo__name">Anthony Herrera</div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    <IoHome className="icons" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <FaUserAlt className="icons" />
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    <FaCode className="icons" />
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <FaEnvelope className="icons" />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
