import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import Home from "../Home/Home";
import './NavItems.css';
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Certificate from "../certificate/Certificate";
import Experience from "../experience/Experience";
import Contact from '../contact/Contact';

const NavItems = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const sections = [
        { name: "Home", component: <Home /> },
        { name: "Skill", component: <Skill /> },
        { name: "Projects", component: <Projects /> },
        { name: "Certificate", component: <Certificate /> },
        { name: "Experience", component: <Experience /> },
        { name: "Contact", component: <Contact /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>

            {isScrolled && (
                <div className="nav-menu">
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? '-' : '+'}
                    </button>

                    {isMenuOpen && (
                        <div className="nav-options">
                            {sections.map((section) => (
                                <a
                                    key={section.name}
                                    onClick={() =>
                                        document.getElementById(section.name).scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    {section.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {sections.map((section) => (
                <div key={section.name} id={section.name}>
                    {section.component}
                </div>
            ))}
        </div>
    );
};

export default NavItems;
