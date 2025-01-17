import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material"; // Correct import for MUI v5
import Heading from "../Heading/heading";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import "./Experience.css";
import RightExp from "./RightExp";
import LeftExp from "./LeftExp";

const Experience = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="expe-section">
            <div className="heading">

                <Heading heads={"Experience"} />
            </div>
            <br />
            <br /> <br />
            <div className="exp">
                <div className="exp-left">
                    <LeftExp />
                </div>
                <div
                    className="line"
                    style={{
                        position: "relative",
                        height: "130vh",
                        width: "2px",
                        backgroundColor: "#000",
                        margin: "0 auto",
                    }}
                >
                    <div
                        className="aero"
                        style={{
                            position: "absolute",
                            top: `${scrollPosition * 0.4 % window.innerHeight}px `,
                            left: "-25px",
                            transition: "top 0.1s ease-in",
                        }}
                    >
                        <MdOutlineAirplanemodeActive size={50} color="#ffae08" />
                        
                    </div>
                </div>
                <div className="exp-right">
                    <RightExp />
                </div>
            </div>
        </div>
    );
};

export default Experience;
