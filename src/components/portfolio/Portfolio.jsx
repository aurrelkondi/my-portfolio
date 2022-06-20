import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/img-1.jpg";
import IMG2 from "../../assets/img-2.jpg";
import IMG3 from "../../assets/img-3.jpg";
import IMG4 from "../../assets/img-4.jpg";
import IMG5 from "../../assets/img-5.jpg";
import IMG6 from "../../assets/img-6.jpg";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "My Project",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "My Project",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "My Project",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: IMG4,
      title: "My Project",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: IMG5,
      title: "My Project",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: IMG6,
      title: "My Project",
      github: "https://github.com",
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
