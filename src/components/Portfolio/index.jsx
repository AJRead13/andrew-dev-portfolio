import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'AI-ttrpg-generator',
      description: 'React App with AI',
      link: "https://github.com",
      repo: "https://github.com/AJRead13/ttrpg-prompts"
    },
    {
      name: 'dungeonsnotes',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com/AJRead13/dungeons_notes_dragons"
    },
    {
      name: 'jate',
      description: 'PWA/Webpack',
      link: "https://github.com",
      repo: "https://github.com/AJRead13/Text_Editor_Xtreme"
    },
    {
      name: 'moviesToComics',
      description: 'Javascript/CSS/APIs',
      link: "https://ajread13.github.io/Movie-Hype-Generator/",
      repo: "https://github.com/AJRead13/Movie-Hype-Generator"
    },
    {
      name: 'readMe',
      description: 'Node/Javascript',
      // link: "https://github.com",
      repo: "https://github.com/AJRead13/Node_ReadMe_Generator"
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
