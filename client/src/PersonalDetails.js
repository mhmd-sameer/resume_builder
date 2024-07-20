import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalDetails.css';

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
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
    navigate('/EducationDetails'); 
  };

  return (
    <div className="personal-details-form-container">
      <div className="personal-details-form-left">
        <h1>Personal Details Form</h1>
        <img src="personal_details.avif" alt="Personal Details" className="personal-details-form-image" />
        <p>Fill in your personal details below:</p>
      </div>
      <div className="personal-details-form-right">
        <form onSubmit={handleSubmit}>
          <div className="personal-details-form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="personal-details-form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="personal-details-form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="personal-details-form-group">
            <textarea
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="personal-details-btn-submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
