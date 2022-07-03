import React from "react";
import "../css/about-me.css";


export default function AboutMe (){
    return (
        <section className="about-me">
            <h1>Обо мне</h1>

            <div className="about-me_text">
                <p>
                    Всем привет, я Павел – frontend-разработчик и Москвы. 
                    Я интересуюсь программированием на JS и всем, что с этим связано.
                </p>
                <p>
                    Я учился на курсе "Веб-разработка" в Яндекс.Практикум.
                </p>
                <p>
                    Готов реализовывать отличные проекты с замечательными людьми.
                </p>
            </div>
            
        </section>
    )
}