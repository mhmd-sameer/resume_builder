import React from "react";
import ResumeBuilderHome from "./ResumeBuilderHome";
import ResumeOptions from "./ResumeOptions"
import PersonalDetails from "./PersonalDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EducationDetails from "./EducationDetails";
import TechnicalSkills from "./TechnicalSkills";
import WorkExperience from "./WorkExperience";
import ExperienceVerify from "./ExperienceVerify"
import Projects from "./Projects";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeBuilderHome />} />
          <Route path="/ResumeOptions" element={<ResumeOptions />} />
          <Route path="/PersonalDetails" element={<PersonalDetails />} />
          <Route path="/EducationDetails" element={<EducationDetails />} />
          <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route path="/ExperienceVerify" element={<ExperienceVerify />} />
          <Route path="/Projects" element={<Projects />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;



