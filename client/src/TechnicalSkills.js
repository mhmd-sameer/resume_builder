import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TechnicalSkills.css';

const skillsOptions = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'SQL',
  'HTML',
  'CSS',
  'Ruby'
];

const TechnicalSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSkillAdd = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSkills.length < 3) {
      setError('Please select at least 3 skills.');
      return;
    }
    setError('');
    navigate('/ExperienceVerify'); // Navigate to the new page
  };
  

  const handlePrevious = () => {
    navigate('/PersonalDetails'); // Navigate to the previous page
  };

  return (
    <div className="technical-skills-form-container">
      <div className="technical-skills-form-left">
        <h1>Select Your Technical Skills</h1>
        <img src="technical_skills.jpg" alt="Technical Skills" className="technical-skills-form-image" />
        <p>Select at least 3 skills from the list below:</p>
      </div>
      <div className="technical-skills-form-right">
        <form onSubmit={handleSubmit}>
          <div className="technical-skills-form-group technical-skills-skills-list">
            {skillsOptions.map((skill) => (
              <div key={skill} className="technical-skills-skill-item" onClick={() => handleSkillAdd(skill)}>
                {skill} +
              </div>
            ))}
          </div>
          {error && <div className="technical-skills-error">{error}</div>}
          <div className="technical-skills-selected-skills">
            <h2>Selected Skills:</h2>
            {selectedSkills.map((skill, index) => (
              <div key={index} className="technical-skills-skill-item" onClick={() => handleSkillRemove(skill)}>
                {skill} -
              </div>
            ))}
          </div>
          <div className="form-buttons">
            <button type="button" className="btn-previous" onClick={handlePrevious}>Previous</button>
            <button type="submit" className="technical-skills-btn-submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TechnicalSkills;
