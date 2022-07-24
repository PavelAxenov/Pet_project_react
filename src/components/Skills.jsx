import React from "react";
import html from "../images/skills/html.svg";
import Css from "../images/skills/css.svg";
import Sass from "../images/skills/sass.svg";
import vsCode from "../images/skills/vs-code.svg";
import javaScript from "../images/skills/javascript.svg";
import reAct from "../images/skills/react.svg";
import Figma from "../images/skills/figma.svg";
import Vue from "../images/skills/vue.svg";
import "../css/skills.css";


export default function Skills() {
    let arr = [
            html,
            Css,
            Sass,
            vsCode,
            javaScript,
            reAct,
            Vue,
            Figma
        ];
    
   
    const listItems = arr.map((item) =>
        <li key={item.toString()} className="skills__prog"><img src={item} className="prog" alt="html" /></li>
    );

    return (
        <section className="skills">
            <h1>Навыки</h1>
            <span>Я работаю с такими программами как:</span>
            <ul className="skills__programms">
                {listItems}
            </ul>
        </section>
    )
}