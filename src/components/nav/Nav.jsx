import React from "react";
import "./nav.scss";
import { BiHomeAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { FcContacts } from "react-icons/fc";
import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : null}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <GrServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        >
        <FcContacts />
      </a>
    </nav>
  );
}
