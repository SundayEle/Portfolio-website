import React from "react";
import "./portfolio.scss";
import IMG1 from "../../../assets/1.png";
import IMG2 from "../../../assets/2.png";
import IMG3 from "../../../assets/3.png";
import IMG4 from "../../../assets/4.jfif";
import IMG5 from "../../../assets/5.jfif";
import IMG6 from "../../../assets/6.jfif";
import { Fade } from "react-awesome-reveal";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Book Store Backend Application",
    github: "https://github.com/SundayEle/Bookstore_BE",
  },
  {
    id: 3,
    image: IMG2,
    title: "Currency Converter App",
    github: "https://github.com/SundayEle/sun-currency-converter",
  },
  {
    id: 2,
    image: IMG1,
    title: "Restaurant Website UI",
    github: "https://github.com/SundayEle/Restaurant-Website",
  },

  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency website",
    github: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "E-Commerce Website",
    github: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Facebook UI",
    github: "https://github.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <Fade delay={1e2}>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}

export default Portfolio;
