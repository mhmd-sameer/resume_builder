import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumeBuilderHome.css';

const ResumeBuilderHome = () => {
  const navigate = useNavigate(); 

  const handleBuildClick = () => {
    navigate('/ResumeOptions'); 
  };

  return (
    <div className="resume-builder-page">
  <header className="header">
    <h1 className="animated-text">AI-Powered Resume Builder</h1>
  </header>
  <div className="main-container">
    <main className="main-content">
      <div className="content-container">
        <div className="image-container">
          <img src="resume_home.jpg" alt="Resume Builder" className="resume-image" />
        </div>
        <div className="text-container">
          <section className="description">
            <h2 className="animated-text">About Our Resume Builder</h2>
            <p className="animated-text">
              Craft the perfect resume with our AI-powered resume builder. Provide some key details, and our AI will generate a professional resume tailored to your experiences and career goals. Stand out from the competition with a well-structured, visually appealing resume in minutes. Save time and boost your job search with a customized resume.
            </p>
          </section>
          <section className="build-button">
            <button onClick={handleBuildClick} className="btn-build">
              Build Resume
            </button>
          </section>
        </div>
      </div>
    </main>
  </div>
</div>

  );
};

export default ResumeBuilderHome;
