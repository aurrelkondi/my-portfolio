import React from "react";
import "./services.scss";
import { FaCheckCircle } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATIONS</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATIONS */}
      </div>
    </section>
  );
}
