import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.scss";

function App() {
    return (
        <Router>
            <div id="app">
            <NavBar />
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
