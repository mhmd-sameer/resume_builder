import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([{ title: '', description: '' }]);
  const navigate = useNavigate();

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  const handleRemoveProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or save the data as needed
    navigate('/nextPage'); // Navigate to the next page
  };

  const handlePrevious = () => {
    navigate('/ExperienceVerification'); // Navigate to the previous page
  };

  return (
    <div className="projects-form-container">
      <div className="projects-form-left">
        <h1>Projects</h1>
        <img src="projects.webp" alt="Projects" className="projects-form-image" />
        <p>Describe your notable projects:</p>
      </div>
      <div className="projects-form-right">
        <form onSubmit={handleSubmit}>
          <div className="projects-form-scrollable">
            {projects.map((project, index) => (
              <div key={index} className="projects-form-group">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                
                />
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveProject(index)} className="btn-remove-project">
                    Remove Project
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddProject} className="btn-add-project">Add Another Project</button>
          </div>
          <div className="form-buttons">
            <button type="button" className="btn-previous" onClick={handlePrevious}>Previous</button>
            <button type="submit" className="btn-submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Projects;
