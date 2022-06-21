import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/img-11.png";
import IMG2 from "../../assets/img-12.png";
import IMG3 from "../../assets/img-13.png";
/* import IMG4 from "../../assets/img-4.jpg";
import IMG5 from "../../assets/img-5.jpg";
import IMG6 from "../../assets/img-6.jpg"; */

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "First-Project",
      github: "https://github.com/aurrelkondi/My-First-Project",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "Portfolio-Html&Css",
      github: "https://github.com/aurrelkondi/Portfolio",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Portfolio-React",
      github: "https://github.com/aurrelkondi/my-portfolio",
      demo: "https://github.com",
    },
  ];

  return (
    <section>
      <h5 className="h5-element">My recent work</h5>
      <h2 className="h2-element">Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
