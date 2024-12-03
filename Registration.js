// Components/registration/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Registration.module.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('All fields are required.');
      setSuccessMessage('');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage('Registration successful!');
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className={styles.registrationPage}>
      <div className={styles.registrationContainer}>
        <h2 className={styles.registrationTitle}>Create an Account</h2>
        <form onSubmit={handleSubmit} className={styles.registrationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        <div className={styles.loginOption}>
          <p>
            Already have an account?{' '}
            <span onClick={() => navigate('/login')} className={styles.loginLink}>
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
