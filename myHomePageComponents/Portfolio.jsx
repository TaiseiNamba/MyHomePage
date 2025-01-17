import React from "react";
import "./portfolio.css";
import CalculatorReact from "../calculatorReact/calculatorReact";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Calculator",
      description: "Calculator (HTML, CSS, JavaScript)",
      link: "https://github.com/TaiseiNamba/calculator",
    },
    {
      id: 2,
      title: "calucrator2",
      description: "Calculator (react)",
      link: "https://github.com/TaiseiNamba/MyHomePage",
      work: <CalculatorReact/>
    },
    {
      id: 3,
      title: "Home Page",
      description: "myintroduction",
      link: "https://example.com/portfolio",
    },
    {
      id: 4,
      title: "coming soon・・・",
      description: "my work",
      link: "https://example.com/ecommerce",
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-point"
            >
              <p>View Project  (github)</p>
              
            </a>
              {project.work}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
