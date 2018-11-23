import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import './Router.scss';

import Accueil from './Accueil';
import Expertise from './Expertise.js';
import Technologie from './Technologie.js';
import Secteurs from './Secteurs.js';
import Realisations from './Realisations.js';

import Contact from './Contact.js';



export default class Router extends Component {
  render() {
    return (
      
            <BrowserRouter>

                <div>
                    <ul className="navBar">
                        <li>
                            <NavLink className="onNavbar" to="/" exact>logo</NavLink>
                        </li>
                        <li>
                            <NavLink className="onNavbar" to="/Expertise" exact>Expertise</NavLink>
                        </li>
                        <li>
                            <NavLink className="onNavbar"to="/Technologie" exact >Technologie</NavLink>
                        </li>
                        <li>
                            <NavLink className="onNavbar"to="/Secteurs" exact >Secteurs</NavLink>
                        </li>
                        <li>
                            <NavLink className="onNavbar"to="/Realisations" exact >Realisations</NavLink>
                        </li>
                        <li>
                            <NavLink className="onNavbar"to="/Contact" exact >Contact</NavLink>
                        </li>
                       

                    </ul>

                    <Route exact path="/" strict component={Accueil} />
                    <Route  path="/Expertise" strict component={Expertise} />
                    <Route  path="/Technologie" strict component={Technologie} />
                    <Route  path="/Secteurs" strict component={Secteurs} />
                    <Route  path="/Realisations" strict component={Realisations} />
                    <Route  path="/Contact" strict component={Contact} />
                    

                </div>

            </BrowserRouter>

        )
    }
}
