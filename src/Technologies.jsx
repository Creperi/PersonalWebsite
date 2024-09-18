import React from "react";
import reactlogo from './Icons/React-icon.png'
import nodelogo from './Icons/node-js logo.png'
import unitylogo from './Icons/Unity-Logo.png'
import autocadlogo from './Icons/Autocad-Logo.png'
import cSharplogo from './Icons/cSharpLogo.png'
import BlenderLogo from './Icons/Blender-Logo.png'
export default function Technologies(){
    return(
    <div>
    <h1 className="display-2 mx-3 text-center">Technologies</h1>
    <div className="container">
    <div className="row row-cols-md-4 row-cols-sm-2 justify-content-center">
        	    <div className="card text-center align-items-center justify-content-center mx-4 mx-s-1 my-2" style={{width:"140px"}}>
                    <div className="card-body"><img src={reactlogo} width="60" height="auto" className="my-2" alt="React Logo"/></div>
                    <div className="card-text">React</div>
                </div>
                <div className="card text-center align-items-center justify-content-center mx-4 mx-s-1 my-2" style={{width:"140px"}}>
                <div className="card-body"><img src={nodelogo} width="60" height="auto" className="my-2" alt="Node.js Logo"/></div>
                <div className="card-text">Node.js</div>
                </div>
                <div className="card text-center align-items-center justify-content-center mx-4 mx-s-1 my-2" style={{width:"140px"}}>
                <div className="card-body"><img src={unitylogo} width="60" height="auto" className="my-2" alt="Unity Logo"/></div>
                <div className="card-text">Unity</div>
                </div>
                <div className="card text-center align-items-center justify-content-center mx-4 mx-s-1 my-2" style={{width:"140px"}}>
                <div className="card-body"><img src={autocadlogo} width="60" height="auto" className="my-2" alt="AutoCAD Logo"/></div>
                <div className="card-text">AutoCAD</div>
                </div>
                <div className="card text-center align-items-center justify-content-center mx-4 mx-s-1 my-2" style={{width:"140px"}}>
                <div className="card-body"><img src={cSharplogo} width="60" height="auto" className="my-2" alt="C# Logo"/></div>
                <div className="card-text">C#</div>
                </div>
                <div className="card text-center align-items-center justify-content-center mx-4 mx-s-1 my-2" style={{width:"140px"}}>
                <div className="card-body"><img src={BlenderLogo} width="60" height="auto" className="my-2" alt="Blender"/></div>
                <div className="card-text">Blender</div>
                </div>
        </div>

    </div>
</div>)
}