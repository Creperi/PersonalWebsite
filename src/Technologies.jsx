import React from "react";
import reactlogo from './React-icon.png'
import nodelogo from './node-js logo.png'
import unitylogo from './Unity-Logo.png'
import AutocadLogo from './Autocad-Logo.png'
export default function Technologies(){
    return(
    <div>
    <h1></h1>
    <h1 className="display-2 mx-3 text-left">Technologies</h1>
    <img src={reactlogo} width="80px" height="auto" className="mx-5"/>
    <img src={nodelogo} width="80px" height="auto" className="mx-5"/>
    <img src={unitylogo} width="160px" height="auto" className="mx-5"/>
    <img src={AutocadLogo} width="160px" height="auto" className="mx-5"/>
</div>)
}