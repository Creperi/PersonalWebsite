import React from "react";
import './style.scss'
export default function PortfolioItem({imageUrl, title, description}) {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>
        )
}