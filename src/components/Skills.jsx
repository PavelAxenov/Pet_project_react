import React from "react";
import html from "../images/skills/html.svg";
import Css from "../images/skills/css.svg";
import Sass from "../images/skills/sass.svg";
import vsCode from "../images/skills/vs-code.svg";
import javaScript from "../images/skills/javascript.svg";
import reAct from "../images/skills/react.svg";
import Figma from "../images/skills/figma.svg";
import Vue from "../images/skills/vue.svg";
import Rang from "../images/skills/rang.svg";
import "../css/skills.css";

export default function Skills() {
    return (
        <section className="skills">
            <h1>Навыки</h1>
            <span>Я работаю с такими программами как:</span>
            <ul className="skills__programms">
                <li className="skills__prog">
                    <img src={html} className="prog" alt="html" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={Css} className="prog" alt="css" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={Sass} className="prog" alt="Sass"  />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={javaScript} className="prog" alt="javaScript" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={reAct} className="prog" alt="react" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={Vue} className="prog" alt="vue" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={Figma} className="prog" alt="Figma" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>
                <li className="skills__prog">
                    <img src={vsCode} className="prog" alt="vscode" />
                    <span className="prog-name"></span>
                    <img src={Rang} className="prog-rang" alt="rang" />
                </li>

            </ul>
        </section>
    )
}