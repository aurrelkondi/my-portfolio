import React from "react";
import "./about.scss";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";

function About() {
  return (
    <section id="about ">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaRegFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            numquam similique inventore corporis? Deleniti ut, libero provident
            deserunt quasi odio similique et nemo distinctio neque dolor hic
            nulla repellendus iure!
          </p>

          <a href="#contact" className="btn btn-primary"></a>
        </div>
      </div>
    </section>
  );
}

export default About;
