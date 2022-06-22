import React from "react";
import "./header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import img1 from "../../assets/IMG_3444.jpg";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h1>Aurrel Kondi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={img1} alt="" />
        </div>
        <a href="#contact" className="scorll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
