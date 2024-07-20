import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperienceVerify.css';

const ExperienceVerify = () => {
  const [hasExperience, setHasExperience] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleExperienceChange = (e) => {
    setHasExperience(e.target.value === 'yes');
  };

  const handleYearsChange = (e) => {
    setYearsOfExperience(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasExperience && !yearsOfExperience) {
      setError('Please specify the number of years of experience.');
      return;
    }
    setError('');
    if (hasExperience) {
      navigate('/WorkExperience');
    } else {
      navigate('/Projects');
    }
  };

  return (
    <div className="experience-verification-container">
      <div className="experience-verification-left">
        <h1>Do You Have Work Experience?</h1>
        <p>Select "Yes" or "No" and provide the number of years if applicable.</p>
      </div>
      <div className="experience-verification-right">
        <form onSubmit={handleSubmit}>
          <div className="experience-verification-group">
            <label>
              <input
                type="radio"
                name="experience"
                value="yes"
                onChange={handleExperienceChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="no"
                onChange={handleExperienceChange}
              />
              No
            </label>
          </div>
          {hasExperience && (
            <div className="experience-verification-group">
              <input
                type="number"
                placeholder="Number of Years"
                value={yearsOfExperience}
                onChange={handleYearsChange}
              />
            </div>
          )}
          {error && <div className="experience-verification-error">{error}</div>}
          <div className="form-buttons">
            <button type="submit" className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceVerify;
