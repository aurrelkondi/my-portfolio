import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/wather-app-profile.png";
import IMG2 from "../../assets/Coverter-app-profile.png";
import IMG3 from "../../assets/Todo-list-profile.png";
/* import IMG4 from "../../assets/img-4.jpg";
import IMG5 from "../../assets/img-5.jpg";
import IMG6 from "../../assets/img-6.jpg"; */

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Weather-app",
      github: "https://github.com/aurrelkondi/JS-Weather-App",
      demo: "https://js-weather-o1k4eqnbc-aurrelkondi.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Converter-app",
      github: "https://github.com/aurrelkondi/convertet-app-react",
      demo: "https://convertet-app-react.vercel.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Todo-list",
      github: "https://github.com/aurrelkondi/Todo-React",
      demo: "https://todo-react-lyart-beta.vercel.app/",
    },
  ];

  return (
    <section>
      <h5 className="h5-element">My recent work</h5>
      <h2 className="h2-element">Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
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
        ))}
      </div>
    </section>
  );
}
