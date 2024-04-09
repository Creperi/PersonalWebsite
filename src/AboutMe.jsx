import React from "react";
export default function AboutMe(props){
    return(

    <div className="content" style={{height:'500px'}}>
        <div className="col-6">
        <h1 className="display-2 mx-3">{props.title}</h1>
    <p className="text-dark text-left mx-3">
        Hello, I'm Elias Poniridis.
        </p>
        <p className="text-dark text-left mx-3">
        Licensed Electronics Engineer and researcher based in Athens, Greece, passionated with technology and
        video games. I have knowledge on game development, Geoinformation and software engineering, 
        </p>
        <button type="button" className="btn btn-primary">Contact me</button>

        </div>
        <div className="col-6">

        </div>
</div>)
}