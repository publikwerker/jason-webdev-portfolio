import React from 'react';
import {projectList} from '../projectList';

export default class Body extends React.Component {

  render() {
    let projectDisplay=[];
    projectList.forEach((project, index) => {
      projectDisplay.push(<section key={index} className="project-box"> 
          <h3 className="project-title">{project.title}</h3>
          <img className="project-image" alt="the app as viewed in widescreen and mobile format" src={project.mockUp}></img>
          <p className="project-description">{project.description}</p>
          <p className="project-stack">{project.stack}</p>
          <a className="project-github project-link" href={project.github} target="_blank" rel="noopener noreferrer">Code</a> 
          <a className="project-demo project-link" href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        </section>) })
    return(<main className="main-body">
        <h3 className=" body-display">Past Werk <i className="smaller">[sic].</i>:   </h3>
        <div className="row showcase">
          {projectDisplay}
        </div>
      </main>
    )
  }
}