import React from "react";
import './style.scss'
import PortfolioItem from "./PortfolioItem";
import { projectData } from "./data";
export default function Projects() {
  let games = projectData.filter(project => project.type === "game")
  let applications = projectData.filter(project => project.type === "application")
  return (
    <div className="container" id="projects">
      <h1 className="display-2 mx-3 text-center">Projects</h1>
      <div className="row portfolio-gallery">
        <h1 className="text-center">Games</h1>
        {games.map(game => <PortfolioItem key={game.id} imageUrl={game.imageUrl} title={game.title} description={game.description} link={game.link}/>)}
        <h1 className="text-center">Applications and Websites</h1>
        {applications.map(application => <PortfolioItem key={application.id} imageUrl={application.imageUrl} title={application.title} description={application.description} link={application.link}/>)}
      </div>
      <a href="" download="Elias_Poniridis-Resume.pdf" className="btn btn-primary">View my CV</a>
    </div>)
}
