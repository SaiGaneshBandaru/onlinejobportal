import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ApplicationStatus.module.css'; // CSS module for styling

const ApplicationStatus = () => {
  const navigate = useNavigate();

  const handleHome1Redirect = () => {
    navigate('/home1'); // Redirect to Home1 page
  };

  return (
    <div className={styles.statusContainer}>
      <h2>Application Status</h2>
      <div className={styles.statusDetails}>
        <p>Your application for the position is under review.</p>
        <p>We will notify you via email once the status changes.</p>
      </div>
    </div>
  );
};

export default ApplicationStatus;
