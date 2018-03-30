import React from 'react';
import _ from 'lodash';
import projectsData from './projectsData';

import './Projects.css';

const Projects = () => {
  const titleColors = [
    '#CEB6DD',
    '#D5DCE8',
    '#B0D3AB',
    '#FFEFC9',
    '#FFE2CC'
  ];

  const projects = _.map(projectsData, (project, index) => {
    const color = titleColors[index % titleColors.length];
    const projectStyle = { borderColor: color }
    const titleStyle = { color };
    const boxStyle = { borderColor: color };
    
    return (
      <div className='Projects-project' style={projectStyle} key={index}>
        <a href={project.url} target='_'>
          <div className='Projects-header'>
            <h3 className='Projects-name' style={titleStyle}>{project.name}</h3>
              <div className='Projects-box' style={boxStyle}></div>
          </div>
        </a>
        <div className='Projects-description'>{project.description}</div>
      </div>
    );
  });

  return (
    <div className='Projects'>
      <h2 className='Projects-title'>Projects</h2>
      {projects}
    </div>
  );
};

export default Projects;
