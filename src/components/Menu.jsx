import React from "react";
import "../css/menu.css";
import { Link } from 'react-router-dom';

export default function Menu() {
    function handleClick(e) {
        handleClickRemove(e);
        e.target.classList.add('blackout');
    }

    function handleClickRemove() {
        let menu = document.getElementById('menu-dash');
        let menuLinks = menu.getElementsByTagName('a');

        for (let i = 0; i < menuLinks.length; i++) {
            if (menuLinks[i].classList.contains('blackout')) {
                menuLinks[i].classList.remove('blackout')
            }
        }
    }

    return (
        <section>
            {/* Меню на дашборд */}
            <nav id="menu-dash" className="menu" >
                <li onClick={handleClick}><Link to="/">Главная</Link></li>
                <li onClick={handleClick}><Link to="/about-me">Обо мне</Link></li>
                <li onClick={handleClick}><Link to="/skills">Навыки</Link></li>
                <li onClick={handleClick}><Link to="/portfolio">Портфолио</Link></li>
                <li onClick={handleClick}><Link to="/contacts">Контакты</Link></li>
            </nav>

            {/* Меню на планшет и меньше */}
            <nav id="menu-mob" className="collapsible-menu">
                <input type={"checkbox"} id='menu'></input>
                <label htmlFor="menu">Menu</label>
                <div className="menu-content">
                    <ul>
                        <li onClick={handleClick}><Link to="/">Home</Link></li>
                        <li onClick={handleClick}><Link to="/about-me">About me</Link></li>
                        <li onClick={handleClick}><Link to="/skills">Skills</Link></li>
                        <li onClick={handleClick}><Link to="/portfolio">Portfolio</Link></li>
                        <li onClick={handleClick}><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}























