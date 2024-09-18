import React from "react";
import './style.scss'
export default function ServiceItem({Title, Description, ImageURL}) {
    return (
        <div className="col-md-4">
            <div className="card" style={{ backgroundColor: '#ffffff' }}>
                <img src={ImageURL} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>)
}