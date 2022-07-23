import React from "react";
import "../css/portfolio.css";
import polka from "../images/travel/Polka.jpg";
import kosa from "../images/travel/Kosa.jpg";
import baykal from "../images/travel/Baykal.jpg";
import places from "../images/travel/Places.jpg";
import addCard from "../images/mesto/add-card.jpg";
import cards from "../images/mesto/cards.jpg";
import profile from "../images/mesto/profile.jpg";
import registration from "../images/mesto/registration.jpg";
import todoList from "../images/todoList/todo.jpg";

export default function Portfolio() {
    return (
        <section>
            <div className="sl">

                <div className="travel">
                    <p className="project">Проект:
                        <a href="https://github.com/PavelAxenov/russian-travel"> Путешествие по России</a>
                    </p>
                    <div className="slider_1 middle">
                        <div className="slides">

                            <input type="radio" name="r" id="r1" defaultChecked></input>
                            <input type="radio" name="r" id="r2"></input>
                            <input type="radio" name="r" id="r3"></input>
                            <input type="radio" name="r" id="r4"></input>

                            <div className="slide s1"><img src={polka} alt="polka" /></div>
                            <div className="slide"><img src={kosa} alt="kosa" /></div>
                            <div className="slide"><img src={places} alt="places" /></div>
                            <div className="slide"><img src={baykal} alt="baykal" /></div>

                        </div>

                        <div className="navigation">
                            <label htmlFor="r1" className="bar"></label>
                            <label htmlFor="r2" className="bar"></label>
                            <label htmlFor="r3" className="bar"></label>
                            <label htmlFor="r4" className="bar"></label>
                        </div>
                    </div>
                </div> 
                
                <div className="places">
                    <p className="project">Проект:
                        <a href="https://github.com/PavelAxenov/react-mesto-auth"> Места России</a>
                    </p>
                    <div className="slider_2 middle">
                        <div className="slides">

                            <input type="radio" name="a" id="a1" defaultChecked></input>
                            <input type="radio" name="a" id="a2"></input>
                            <input type="radio" name="a" id="a3"></input>
                            <input type="radio" name="a" id="a4"></input>

                            <div className="slide s1"><img src={profile} alt="profile" /></div>
                            <div className="slide"><img src={cards} alt="cards" /></div>
                            <div className="slide"><img src={addCard} alt="addCard" /></div>
                            <div className="slide"><img src={registration} alt="registration" /></div>

                        </div>

                        <div className="navigation">
                            <label htmlFor="a1" className="bar"></label>
                            <label htmlFor="a2" className="bar"></label>
                            <label htmlFor="a3" className="bar"></label>
                            <label htmlFor="a4" className="bar"></label>
                        </div>
                    </div>
                </div>

                <div className="todo-vue">
                    <p className="project">Проект:
                        <a href="https://github.com/PavelAxenov/ToDo-VueJS"> ToDo List</a>
                    </p>
                    <div className="slider_3 middle">
                        <div className="slides">

                            <div className="slide s1"><img src={todoList} alt="todoList" /></div>

                        </div>

                        <div className="navigation">
                            <label htmlFor="b1" className="bar"></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other_projects">
                <p>Увидеть больше моих проектов можно в моем <a target="_blanck" href="https://github.com/PavelAxenov">профиле</a></p>
            </div>
        </section>
    )
}