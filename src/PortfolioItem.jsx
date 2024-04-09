import React from "react";
import './style.scss'
import imageUrl from './assets/nW_giG.png';
export default function PortfolioItem() {
    return (
        <div className="col-md-4">
            <div className="card" style={{ backgroundColor: '#e3f65a' }}>
                <img src={imageUrl} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">Laser Link</h5>
                    <p className="card-text">Game about controlling laser cannons. Developed as part of Bitter Sails New Year, New Skills game jam</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>)
}