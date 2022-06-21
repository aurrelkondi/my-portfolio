import React from "react";
import "./about.scss";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import img1 from "../../assets/IMG_3444.jpg";

function About() {
  return (
    <section id="about ">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaRegFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I'm Aurrel, an Albanian born Web Developer currently looking for
            opportunities in Berlin. I started my adventure with DCI to fulfil
            my dream, and everything is going in the right direction.
            <br />
            Web can sometimes be indistinguishable from magic, but in the future
            I will have the knowledge and patience required to do almost
            anything.
          </p>

          <a href="#contact" className="btn btn-primary"></a>
        </div>
      </div>
    </section>
  );
}

export default About;
