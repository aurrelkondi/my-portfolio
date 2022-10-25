import React from "react";
import "./Contact";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>aurrelkondi@hotmail.com</h5>
            <a href="mailto:aurrelkondi@hotmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aurrel Kondi</h5>
            <a href="https://www.linkedin.com/in/aurrelkondi/" target="_blank">
              Be in touch
            </a>
          </article>
          <article className="contact__option">
            <BsGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>aurrelkondi</h5>
            <a
              href="https://api.whatsapp.com/send?phone+49999999999"
              target="_blank"
            >
              Check it out
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form
          action="https://formsubmit.co/aurrelkondi@hotmail.com"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmit(true);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {submit ? <Modal setSubmit={setSubmit} /> : null}
      </div>
    </section>
  );
}
