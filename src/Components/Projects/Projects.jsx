import React from 'react';
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects-container">
      <h2 id="projects-title">This is a list of my projects</h2>
      <div id="project-images">
      <img
              className="projects"
              src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1598330748/statusPic2_sz2hmj.png"
              alt="Project One"
        />
        <img
              className="projects"
              src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1598330748/statusPic1_kwq5qh.png"
              alt="Project Two"
        />
        <img
              className="projects"
              src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1598330748/statusPic3_h1kvjr.png"
              alt="Project Three"
        />
        <img
              className="projects"
              src="https://res.cloudinary.com/dhj9oydvn/image/upload/v1597687734/ghibliMuseumLogo_jsxpw6.png"
              alt="Project Four"
            />
      </div>
    </div>
  );
};

export default Projects;