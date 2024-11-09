import React from "react";
import "./Project.css";
import cineprash from "../../assets/cinemate.png";
import tomato from "../../assets/tomato.png";
import coffee from "../../assets/coffee.png";
import learnSpace from "../../assets/learnspace.jpg";

// Reusable ProjectCard component
const ProjectCard = ({
  imgSrc,
  title,
  description,
  languages,
  codeLink,
  demoLink,
}) => {
  return (
    <div className="projects ">
      <div>
        <img className="project-img" src={imgSrc} alt={title} />
      </div>
      <div>
        <div className="project-content">
          <h2>{title}</h2>
          <p className="max-md:!text-xs font-light tracking-wider ">
            {description}
          </p>
          <div className="project-lang">
            {languages.map((lang, index) => (
              <p
                className=" max-md:!text-xs !font-light !tracking-wider"
                key={index}
              >
                {lang}
              </p>
            ))}
          </div>
          <div className="project-code  max-md:!text-xs !font-light !tracking-wider">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fillRule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <div className="project-section">
      <h1>PORTFOLIO</h1>

      <ProjectCard
        imgSrc={learnSpace}
        title="LearnSpace"
        description="Its a Free Students education resources Hub where studentscan nd the notes, past question and Other Materials. I have use Nodejs, Express and Cloudnary for backend and Nextjs, tailwind and react-query for Frontend."
        languages={["NextJs", "NodeJs", "Express", "Tailwind", "Cloudnary"]}
        // codeLink='https://github.com/Prashant-12-shiy/Coffee-web-project'
        demoLink="https://prashantthapa12.com.np/"
      />

      <ProjectCard
        imgSrc={cineprash}
        title="CinePrash"
        description='"CinePrash" utilizes an API to provide users with instant access to extensive movie details. From titles to cast, genres, and ratings, it offers a seamless experience for integrating comprehensive movie data into any project or application.'
        languages={["React", "Tailwind"]}
        codeLink="https://github.com/Prashant-12-shiy/cineprash"
        demoLink="https://cinemate-prash.netlify.app/"
      />

      <ProjectCard
        imgSrc={tomato}
        title="Tomato"
        description='"Tomato" is a dynamic food delivery website revolutionizing the way you enjoy meals. With an intuitive interface, it offers a seamless experience from browsing delectable dishes to placing orders for swift doorstep delivery.'
        languages={["CSS", "React"]}
        codeLink="https://github.com/Prashant-12-shiy/FoodDelivery---Tomato-"
        demoLink="https://tomato-fooddelivery-prash.netlify.app/"
      />
    </div>
  );
};
