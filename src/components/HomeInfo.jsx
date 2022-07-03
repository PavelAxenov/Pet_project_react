import React from "react";
import "../css/home.css";
import photo from "../images/main_photo.svg";
import photoMini from "../images/main_photo_mini.svg";

export default function HomeInfo() {
    return (
        <section>
            <div className="main-info">
                <p className="name">Павел Аксёнов</p>
                <p className="prof">Frontend -&nbsp;разработчик, 24 года</p>
                <p className="prof">Москва, Российская&nbsp;Федерация</p>
            </div>
            <div className="main-picture">
                <img src={photo} className="photo" alt="#" />
                <img src={photoMini} className="photo_mini" alt="photomini" />
            </div>
        </section>
    )
}