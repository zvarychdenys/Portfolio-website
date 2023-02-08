import React, { Component } from "react";
import "./style.css";
import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

class Footer extends Component {
  handleClick = (url) => {
    console.log(`Przekierowanie do ${url}...`);
    // tutaj można dodać kod do przekierowywania do wybranej strony
  };

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#" onClick={() => this.handleClick("https://www.instagram.com/den_zv03/")}>
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#" onClick={() => this.handleClick("https://github.com/zvarychdenys")}>
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#" onClick={() => this.handleClick("https://www.linkedin.com/in/zvarych/")}>
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;