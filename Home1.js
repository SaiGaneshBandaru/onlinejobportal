import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import styles from "./Home1.module.css"; // Import CSS Module

const Home1 = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className={styles.home1Container}>
      {/* Header Section */}
      <header className={styles.home1Header}>
        <pre>
          <h1>Welcome to Your Career Dashboard</h1>
        </pre>
        <p>Empowering you to reach new heights in your professional journey!</p>
      </header>

      {/* About Portal Section */}
      <section className={styles.portalInfo}>
        <div className={styles.infoContainer}>
          <div className={styles.infoLeft}>
            <h2>About Our Online Job Portal</h2>
            <p>
              Our Online Job Portal is the ultimate platform for job seekers, helping you navigate your career path with ease.
              Whether you're just starting out or looking to advance, we offer tools to help you find the perfect job, prepare for interviews,
              and develop your skills for long-term success.
            </p>
            <p>
              Our portal connects you with leading companies across various industries, offering diverse job opportunities and resources
              to grow your career. Explore, apply, and take your career to the next level with us!
            </p>
          </div>
          <div className={styles.infoRight}>
            <p className={styles.infoText}>
              Join our platform today to connect with top companies, enhance your skills with our resources, and access a world of career opportunities.
              <br />
              Our services include:
              <ul>
                <li>Job Listings from Leading Employers</li>
                <li>Resume Building Tools</li>
                <li>Interview Preparation Resources</li>
                <li>Mock Test Services to Prepare for Interviews</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2>Your Future Starts Here</h2>
        <p>
          Ready to explore new opportunities? Start your journey today with our job openings or practice for your next big interview!
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaButton} onClick={() => navigate("/job-openings")}>
            View Job Openings
          </button>
          <button className={styles.ctaButton} onClick={() => navigate("/mock-test")}>
            Take Mock Tests
          </button>
          {/* Add Application Status Button */}
          <button className={styles.ctaButton} onClick={() => navigate("/application-status")}>
            Track Application Status
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Online Job Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home1;
