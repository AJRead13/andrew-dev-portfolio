import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'TTRPG-Prompt Generator',
      description: 'React App with AI',
      link: "https://github.com",
      repo: "https://github.com/AJRead13/ttrpg-prompts"
    },
    {
      name: 'Dungeons.Notes.Dragons',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'JATE',
      description: 'PWA/Webpack',
      link: "https://github.com",
      repo: "https://github.com/AJRead13/Text_Editor_Xtreme"
    },
    {
      name: 'Marvel Movie and Comics',
      description: 'Javascript/CSS/APIs',
      link: "https://ajread13.github.io/Movie-Hype-Generator/",
      repo: "https://github.com/AJRead13/Movie-Hype-Generator"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
