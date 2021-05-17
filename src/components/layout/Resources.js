import React from "react";
import {Link } from "react-router-dom";
import Navigation from './Navigation';
import "./Resources.css"



class Resources extends React.Component {
  render() {
    return (
      <div>
          <Navbar/>
      <div className = "header">
        <h1>Welcome to our Job Board</h1>
        <h6>Everything you need to make your job search feel like a fresh breeze</h6>
      </div>
      <div className = "pcard">
      <button className = "cards">
        <img src= "https://img-premium.flaticon.com/png/512/942/942799.png?token=exp=1621255580~hmac=1167a999c2b44d6f8f48d3a0ec0dd653" atlt = "resume icon"/>
        <h4>Resume Review</h4>
        <h6>Learn how to write a resume that will land you your dream job in weeks</h6>
      </button>
      <button className = "cards1">
        <img src= "https://img-premium.flaticon.com/png/512/850/850331.png?token=exp=1621257241~hmac=aa96756da5143ba7bacec961f587dc37" atlt = "interview icon"/>
        <h4>Interview Prep</h4>
        <h6>Learn how to best prepare for your upcoming interview to land yor dream job</h6>
      </button>
      <button className = "cards2">
        <img src= "https://img-premium.flaticon.com/png/512/1265/1265757.png?token=exp=1621257487~hmac=c8674d18b055ce930bdd26455cd3e424" atlt = "coverletter icon"/>
        <h4>Cover Letter </h4>
        <h6>Use the templates provided to write a strong and captivating coverletter</h6>
      </button>
      </div>

      <div className = "pcard1">
      <button className = "cards3">
        <img src= "https://img-premium.flaticon.com/png/512/546/546394.png?token=exp=1621258522~hmac=53a085c5ac511745695b9836e997845d" atlt = "resume icon"/>
        <h4>Email Templates</h4>
        <h6>Learn how to write an email that will leave a lasting impact on the hiring manager</h6>
      </button>
      <button className = "cards4">
        <img src= "https://img-premium.flaticon.com/png/512/1239/1239608.png?token=exp=1621258550~hmac=e406aa8ba544f4f22bdb487b1a33ac4c" atlt = "interview icon"/>
        <h4>Network</h4>
        <h6>Learn what's the best way to network with professionals and your fellow students</h6>
      </button>
      <button className = "cards5">
        <img src= "https://img-premium.flaticon.com/png/512/1197/1197460.png?token=exp=1621258580~hmac=a9f12b64c0478ec7c836260e76d8d8fb" atlt = "coverletter icon"/>
        <h4>Hard Skills</h4>
        <h6>Learn a new hard skill such as a new programming language, or how to use Microsoft Excel</h6>
      </button>
      </div>

      
    </div>
    );
  }
}

export default Resources;