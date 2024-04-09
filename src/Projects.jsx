import React from "react";
import './style.scss'
import PortfolioItem from "./PortfolioItem";
export default function Projects() {
    return (
        <div className="container" id="projects">
  <h1 className="display-2 mx-3 text-center">Projects</h1>
  <div className="row portfolio-gallery">
      <PortfolioItem/>
    <div className="col-md-4">
      <div className="card">
        <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2"/>
        <div className="card-body">
          <h5 className="card-title">Project 2</h5>
          <p className="card-text">Description of Project 2</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  </div>
  </div>)
}