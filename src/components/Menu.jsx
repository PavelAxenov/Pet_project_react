import React from "react";
import "../css/menu.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { click } from "@testing-library/user-event/dist/click";

export default function Menu() {
    
    return (
        <section>
            {/* Меню на дашборд */}
            <nav id="menu-dash" className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </nav>

            {/* Меню на планшет и меньше */}
            <nav id="menu-mob" className="collapsible-menu">
                <input type={"checkbox"} id='menu'></input>
                <label htmlFor="menu">Menu</label>
                <div className="menu-content">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About me</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                        <p className="lang">
                            <a href="#" className="ru">RU&nbsp;|</a>
                            <a href="#" className="eng">&nbsp;ENG</a>
                        </p>
                    </ul>
                </div>
            </nav>
            
        </section>
    );
}























