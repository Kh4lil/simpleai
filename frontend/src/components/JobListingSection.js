import React from "react";
import "../styles/JobListingSection.css";

const jobs = [
  {
    title: "Business Development Coordinator",
    location: "Vancouver, British Columbia",
  },
  {
    title: "Full Stack Web Developer",
    location: "Vancouver, British Columbia",
  },
  {
    title: "Social Media Marketing Manager",
    location: "San Francisco, California",
  },
  {
    title: "Product Designer",
    location: "San Francisco, California",
  },
  {
    title: "Mobile UX Designer",
    location: "San Francisco, California",
  },
];

const JobListingSection = () => {
  return (
    <section id="job-listings" className="job-listing-section">
      <div className="job-listing-container">
        <div className="header">
          <h2>Career Opportunities</h2>
        </div>
        <div className="job-cards">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-info">
                <h4>{job.title}</h4>
                <p>{job.location}</p>
              </div>
              <div className="apply-button-wrapper">
                <button className="apply-button">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListingSection;
