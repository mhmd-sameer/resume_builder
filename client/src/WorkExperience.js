import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkExperience.css';

const WorkExperience = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    responsibilities: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here if needed
    // Navigate to the next page
    navigate('/projects');
  };

  const handlePrevious = () => {
    navigate('/ExperienceVerify'); // Navigate to the previous page
  };

  return (
    <div className="work-experience-form-container">
      <div className="work-experience-form-left">
        <h1>Work Experience Form</h1>
        <img src="work_experience.jpg" alt="Work Experience" className="work-experience-form-image" />
        <p>Fill in your work experience details:</p>
      </div>
      <div className="work-experience-form-right">
        <form onSubmit={handleSubmit}>
          <div className="work-experience-form-group">
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="work-experience-form-group">
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="work-experience-form-group">
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="work-experience-form-group">
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="End Date"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="work-experience-form-group">
            <textarea
              id="responsibilities"
              name="responsibilities"
              placeholder="Responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              required
            />
          </div>
          <div className="work-experience-form-buttons">
            <button type="button" className="work-experience-btn-previous" onClick={handlePrevious}>Previous</button>
            <button type="submit" className="work-experience-btn-submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkExperience;
