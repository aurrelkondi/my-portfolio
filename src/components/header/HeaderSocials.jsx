import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/aurrelkondi/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/aurrelkondi" target="_blank">
        <ImGithub />
      </a>
      <a href="https://twitter.com/RrelKondi" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}
