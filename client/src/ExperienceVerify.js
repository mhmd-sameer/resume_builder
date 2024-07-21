import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperienceVerify.css';

const ExperienceVerify = () => {
  const [hasExperience, setHasExperience] = useState(null); // Change initial state to null
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
    if (hasExperience === null) {
      setError('Please select Yes or No.');
      return;
    }
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
        <img src="exp_verify.avif" alt="Experience Verification" className="experience-verification-image" />
        <p>Select "Yes" or "No" and provide the number of years if applicable.</p>
      </div>
      <div className="experience-verification-right">
        <form onSubmit={handleSubmit}>
          <div className="experience-verification-group">
            <p>Select "yes" if you have any work experience</p> {/* Added question */}
            <label>
              <input
                type="radio"
                name="experience"
                value="yes"
                onChange={handleExperienceChange}
              />
              Yes
            </label>
            <p>Select No if you dont have experience </p>
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
              <p>Enter number of years of experience</p>
              <input
                type="number"
                placeholder="Number of Years"
                value={yearsOfExperience}
                onChange={handleYearsChange}
              />
            </div>
          )}
          {error && <div className="experience-verification-error">{error}</div>}
          <div className="experience-verification-buttons">
            <button type="submit" className="experience-verification-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceVerify;
