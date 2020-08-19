import React from 'react';
import { projects } from './projects';
import styles from './projects.module.css';
import image1 from '../../../static/uploads/2258296_130c_4.jpg';

const ProjectSection = () => {
  return (
    <div>
      {projects.map(project => (
        <div className={styles.project_card}>
          <div className={styles.action_section}>
            <div className={styles.text_section}>
              <h2>{project.title}</h2>
              <div>{project.description}</div>
            </div>
            <div className={styles.button_section}>
              <a
                href="http://www.concordsoftwareandexecutiveconsulting.com/wordpress/wordpress/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className={styles.app_button}>View App</button>
              </a>
              <a href="https://www.github.com" rel="noopener noreferrer" target="_blank">
                <button className={styles.code_button}>View Code</button>
              </a>
            </div>
            <div className={styles.tech_row}>
              {project.technologies.map(tech => (
                <div>{tech}</div>
              ))}
            </div>
          </div>
          <div className={styles.image_section}>
            <img src={image1} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
