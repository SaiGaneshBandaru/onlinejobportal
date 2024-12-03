import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import styles from "./Home.module.css"; // Import the CSS Module

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // This function will redirect to the login page
  const handleGetStarted = () => {
    navigate("/login"); // Change this to your login route
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1>Welcome to the Online Job Portal</h1>
        <p>
          Explore diverse job opportunities, apply with ease, and grow your career with us!
        </p>
        <button className={styles.ctaButton} onClick={handleGetStarted}> {/* Add onClick to call navigate */}
          Get Started
        </button>
      </div>

      <div className={styles.homeFeatures}>
        <div className={styles.featureCard}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006847.png"
            alt="Diverse Job Opportunities"
            className={styles.featureImage}
          />
          <h3>Diverse Job Opportunities</h3>
          <p>Browse through a wide variety of job openings from top companies across various industries.</p>
        </div>
        
        <div className={styles.featureCard}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Simple Application Process"
            className={styles.featureImage}
          />
          <h3>Simple Application Process</h3>
          <p>Easily apply to the jobs you're interested in with a straightforward and quick application process.</p>
        </div>

        <div className={styles.featureCard}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png"
            alt="Career Growth"
            className={styles.featureImage}
          />
          <h3>Career Growth</h3>
          <p>Take advantage of resources that help you advance your career and land your dream job.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
