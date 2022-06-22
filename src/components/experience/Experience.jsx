import React from "react";
import "./Experience";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import "./experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>JS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>BOOTSTRAP</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>REACT</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>Node JS</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>Mongo DB</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill />
              <h4>PYTHON</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
