import React from "react";
import Menu from '../components/Menu';
import HomeInfo from '../components/HomeInfo';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contacts from '../components/Contacts';

import { Route } from 'react-router-dom';

//import { BrowserRouter } from 'react-router-dom'; // импортируем BrowserRouter


export default function Main() {
  return (
    <div className="back">
      <Menu />
      <Route exact path='/'><HomeInfo /></Route>
      <Route path='/about-me'><AboutMe /></Route>
      <Route path='/skills'><Skills /></Route>
      <Route path='/portfolio'><Portfolio /></Route>
      <Route path='/contacts'><Contacts /></Route>
    </div>
  );
}
