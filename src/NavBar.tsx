import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

interface NavBarState {
    open: boolean;
}

interface NavBarProps {}

export class NavBar extends Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ open: !this.state.open });
    }

    handleClick(e: any): void {
        e.preventDefault();
        this.setState({ open: !this.state.open });
    }

    render() {
        let iconResponsive = this.state.open ? (
            <AiOutlineClose />
        ) : (
            <GiHamburgerMenu />
        );
        return (
            <React.Fragment>
                <header className="navbar__app">
                    <div className="logo__name">Anthony Herrera</div>
                    <nav
                        className="navbar__links"
                        style={
                            this.state.open
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        <ul>
                            <li>
                                <Link to="/" onClick={this.close}>
                                    <IoHome className="icons" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={this.close}>
                                    <FaUserAlt className="icons" />
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" onClick={this.close}>
                                    <FaCode className="icons" />
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={this.close}>
                                    <FaEnvelope className="icons" />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu__icon" onClick={this.handleClick}>
                        {iconResponsive}
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default NavBar;
