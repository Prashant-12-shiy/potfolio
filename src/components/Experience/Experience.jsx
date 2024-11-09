import React from "react";
import "./Experience.css";

const Experience = () => {

  const experience = [
    {
      job: "Sop Writer",
      description: "Used to write Statement of Proposal for consultency / Students who are applying for foregin countries for their Studies, Visit Visa, etc",
      duration: "2022",
      company: "FreeLancing"
    },
    {
      job: "Frontend Intern",
      description: "Designed and implemented user interfaces using NextJs, Tailwind, Typescript and React Query. Integrated frontend with backend APIs for seamless data exchange.Participated in code reviews and debugging to ensure high-quality code.",
      duration: "2024 June - 2024 September",
      company: "Codynn"
    }
  ]

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className={`timeline-item max-md:pl-0 ${index % 2 === 0 ? 'right' : 'left'}`}>
            <div className="content max-md:!pl-1">
              <h3 className="max-md:text-lg">{exp.job}</h3>
            <p className="max-md:!text-sm max-md:!font-light">{exp.description}</p>
              <span className="max-md:text-sm max-md:!leading-none">{exp.duration}</span>
              <h4>{exp.company}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
