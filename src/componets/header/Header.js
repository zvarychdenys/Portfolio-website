import React, { Component } from "react";
import "./style.css";
import cvphoto from "./../../img/projects/сvphoto.png";
import CvDoc from "./../../img/denys_zvarych.pdf";

class Header extends Component {
  handleDownload = () => {
    console.log("CV zostało pobrane!");
  };

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Hi, I'm <em>Denys</em></strong>
          </h1>
          <h2 className="job_position">
            <strong>Data analyst/BI developer</strong>
          </h2>
          <div className="header__text">
            <p>
              With passion for excellence, unlock the full potential of your
              data and drive insightful decision-making.
            </p>
          </div>
          <a
            href={CvDoc}
            download
            className="btn"
            onClick={this.handleDownload}
          >
            Download CV
          </a>
        </div>
        <div className="cvphoto">
          <img src={cvphoto} alt="your-image-description" />
        </div>
      </header>
    );
  }
}

export default Header



