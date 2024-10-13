import { useParams } from 'react-router-dom';

import BtnGitHub from '../conponents/buttonGitHub/BtnGitHub';
import { projects } from '../helpers/projectsList';


const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-detalis">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.img} alt={project.title} className="project-detalis__cover" />
          <div className="project-detalis__desc">
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHubLink &&
            (<BtnGitHub link="https://github.com" />
            )}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;