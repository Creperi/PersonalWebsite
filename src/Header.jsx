import React from "react";
import { ReactComponent as GithubIcon } from "bootstrap-icons/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "bootstrap-icons/icons/linkedin.svg";
import { ReactComponent as DiscordIcon } from "bootstrap-icons/icons/discord.svg";
import { ReactComponent as ItchIoIcon} from './assets/itchio-textless-black.svg'
export default function Header() {
    return (<header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Elias P.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
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
                        <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/Creperi">
                                    <GithubIcon width="24" height="24" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/elias-poniridis-625b0a1b8/">
                                    <LinkedinIcon width="24" height="24" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/elias-poniridis-625b0a1b8/">
                                    <DiscordIcon width="24" height="24" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://arpacola.itch.io/">
                                    <ItchIoIcon width="24" height="24" fill="#212529bf"/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>)
}