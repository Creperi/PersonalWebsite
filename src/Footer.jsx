import React from "react";
import { ReactComponent as GithubIcon } from "bootstrap-icons/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "bootstrap-icons/icons/linkedin.svg";
import { ReactComponent as DiscordIcon } from "bootstrap-icons/icons/discord.svg";
import { ReactComponent as TelephoneIcon } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as MailboxIcon } from "bootstrap-icons/icons/mailbox.svg";
import { ReactComponent as ItchIoIcon} from './assets/itchio-textless-black.svg'

export default function Footer(){
    return (<div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 col-xs d-flex align-items-center-xs text-xs-center">
        {/* <span className="mb-3 mb-md-0 text-body-secondary">Elias Poniridis</span> */}
        {/* <h5 className="text-sm-center">Contact info</h5> */}
        
        <ul className="nav flex-column">
            <li className="nav-item d-flex align-items-center mb-2">
            <TelephoneIcon width="20" className="me-2" />(+30) 6941400108</li>
            <li className="nav-item d-flex align-items-center mb-2">
              <MailboxIcon width="20" className="me-2" />eliasponiridis@live.com</li>
        </ul>
        
      </div>
      <ul className="nav col-md-4 col-xs list-unstyled d-flex justify-content-end">
            <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/elias-poniridis-625b0a1b8/"><LinkedinIcon width="24" height="24" /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://github.com/Creperi"><GithubIcon width="24" height="24" /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><DiscordIcon width="24" height="24" /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://arpacola.itch.io/"><ItchIoIcon width="24" height="24" color="#212529bf"/></a></li>
      </ul>
    </footer>
  </div>)
}