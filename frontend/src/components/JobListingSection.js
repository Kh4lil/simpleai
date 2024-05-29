import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
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
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="job-listings" className="job-listing-section">
      <animated.div
        ref={ref}
        style={animation}
        className="job-listing-container"
      >
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
      </animated.div>
    </section>
  );
};

export default JobListingSection;
