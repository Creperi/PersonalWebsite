import React from "react";
import { Icon } from "./Icon";
export default function Header(){
    return(<header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Technologies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/Creperi">
                        <Icon path="../node_modules/bootstrap-icons/icons/github.svg"/>
                    </a>
                </li>    
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/elias-poniridis-625b0a1b8/">
                        <Icon path="../node_modules/bootstrap-icons/icons/linkedin.svg"/>
                    </a>
                </li>
            </ul>
        </nav> 
    </header>)
}