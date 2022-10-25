import React from "react";
import "./footer.scss";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Aurrel-Full Stack Web Dev
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/aurrelkondi" target="_blank">
          {" "}
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/aurrelkondi/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Aurrel-logo. All rights reserved.</small>
      </div>
    </footer>
  );
}
