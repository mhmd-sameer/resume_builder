import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EducationDetails.css';

const EducationDetails = () => {
  const [formData, setFormData] = useState({
    degree: '',
    fieldOfStudy: '',
    university: '',
    graduationYear: '',
    grade: '',
    relevantCoursework: ''
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
    navigate('/TechnicalSkills'); 
  };

  const handlePrevious = () => {
    navigate('/PersonalDetails'); // Navigate to the previous page
  };

  return (
    <div className="education-details-form-container">
      <div className="education-details-form-left">
        <h1>Educational Details Form</h1>
        <img src="education_details.jpg" alt="Educational Details" className="education-details-form-image" />
        <p>Fill in your educational details:</p>
      </div>
      <div className="education-details-form-right">
        <form onSubmit={handleSubmit}>
          <div className="education-details-form-group">
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>
          <div className="education-details-form-group">
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              placeholder="Field of Study"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              required
            />
          </div>
          <div className="education-details-form-group">
            <input
              type="text"
              id="university"
              name="university"
              placeholder="University/College"
              value={formData.university}
              onChange={handleChange}
              required
            />
          </div>
          <div className="education-details-form-group">
            <input
              type="number"
              id="graduationYear"
              name="graduationYear"
              placeholder="Year of Graduation"
              value={formData.graduationYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="education-details-form-group">
            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="Grade/Percentage"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>
          <div className="education-details-form-group">
            <textarea
              id="relevantCoursework"
              name="relevantCoursework"
              placeholder="Description (Eg: Graduated with high honours)"
              value={formData.relevantCoursework}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button type="button" className="btn-previous" onClick={handlePrevious}>Previous</button>
            <button type="submit" className="education-details-btn-submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationDetails;
