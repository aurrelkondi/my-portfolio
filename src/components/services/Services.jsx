import React from "react";
import "./services.scss";
import { FaCheckCircle } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>Website - Design</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>Mobile App - Design</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>Cross Platform - Compatibility</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>MERN Stack: MongoDB, Express, ReactJS, and Node.js</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>MEAN Stack: MongoDB, Express, AngularJS, and Node.js</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>MySQL as Database</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service content">
          <div className="service__head">
            <h3>Content Creations</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>Blog Posts</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>Podcasts</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p>eBooks</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATIONS */}
      </div>
    </section>
  );
}
