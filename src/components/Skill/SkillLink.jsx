
import React from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import { FaJava, FaBootstrap, FaReact, FaNpm, FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const SkillLink = () => {
    return (
        [<HtmlIcon />, <CssIcon />, <JavascriptIcon />, <FaReact />, <FaBootstrap />, <RiTailwindCssFill />, <SiMui />, <FaNpm />, <FaNode />, <SiMongodb />, <TbBrandMysql />, <SiExpress />, <FaJava />]
    )
};

export default SkillLink;
