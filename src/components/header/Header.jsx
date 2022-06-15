import React from "react";
import "./header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aurrel Kondi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt=""
          />
        </div>
        <a href="#contact" className="scorll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
