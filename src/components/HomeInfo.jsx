import React from "react";
import "../css/home.css";
import photo from "../images/main_photo.svg";
import photoMini from "../images/main_photo_mini.svg";

export default function HomeInfo() {
    return (
        <section>
            <div className="main-info">
                <p className="name">Pavel Axenov</p>
                <p className="prof">Frontend -&nbsp;developer, 24 years old</p>
                <p className="prof">Moscow, Russian&nbsp;Federation</p>
                {/* <p className="lang">
                    <a href="#" className="ru">RU&nbsp;|</a>
                    <a href="#" className="eng">&nbsp;ENG</a>
                </p> */}
            </div>
            <div className="main-picture">
                <img src={photo} className="photo" alt="#" />
                <img src={photoMini} className="photo_mini" alt="photomini" />
            </div>
        </section>
    )
}