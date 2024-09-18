import React from "react";
import './style.scss'
import ServiceItem from "./ServiceItem";
import PrintedCircuit from './assets/PrintedCircuit.png';
import GameDevelopment from './assets/GameDevelopment.jpg';
export default function Projects() {
    return (
        <div className="container" id="projects">
  <h1 className="display-2 mx-3 text-center">Services</h1>
  <div className="row portfolio-gallery">
      <ServiceItem Title="Verilog/VHDL design" Description="I program digital systems using VHDL" ImageURL={PrintedCircuit}/>
      <ServiceItem Title="Game development" Description="I offer game development services in Unity and Unreal Engine for creating wonderful worlds" ImageURL={GameDevelopment}/>
      <ServiceItem Title="App development" Description="I offer Android and iOS app development services with professional quality" ImageURL={GameDevelopment}/>
  </div>
  </div>)
}