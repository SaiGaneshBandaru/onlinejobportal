import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './ApplyNow.module.css'; // Import the CSS module

const ApplyNow = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [whyUs, setWhyUs] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [highestEducation, setHighestEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [currentEmployer, setCurrentEmployer] = useState('');
  const [noticePeriod, setNoticePeriod] = useState('');
  const [references, setReferences] = useState('');
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setJobTitle(params.get('job')); // Get the job title from the URL
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic, such as API calls or form validation
    alert('Application submitted successfully!');
    navigate('/home1'); // Redirect to Home1 page
  };

  return (
    <div className={styles.applyNowContainer}>
      <h2>Apply for {jobTitle}</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email Address */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Gender */}
        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className={styles.formGroup}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        {/* Highest Level of Education */}
        <div className={styles.formGroup}>
          <label htmlFor="highestEducation">Highest Level of Education</label>
          <input
            type="text"
            id="highestEducation"
            value={highestEducation}
            onChange={(e) => setHighestEducation(e.target.value)}
            required
          />
        </div>

        {/* Skills */}
        <div className={styles.formGroup}>
          <label htmlFor="skills">Relevant Skills</label>
          <textarea
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>

        {/* Resume Upload */}
        <div className={styles.formGroup}>
          <label htmlFor="resume">Resume (PDF/DOCX)</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>

        {/* Cover Letter */}
        <div className={styles.formGroup}>
          <label htmlFor="coverLetter">Cover Letter (Optional)</label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
        </div>

        {/* Expected Salary */}
        <div className={styles.formGroup}>
          <label htmlFor="salary">Expected Salary (LPA)</label>
          <input
            type="number"
            id="salary"
            value={expectedSalary}
            onChange={(e) => setExpectedSalary(e.target.value)}
            required
          />
        </div>

        {/* Available Start Date */}
        <div className={styles.formGroup}>
          <label htmlFor="startDate">Available Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        {/* Why Should We Hire You */}
        <div className={styles.formGroup}>
          <label htmlFor="whyUs">Why should we hire you?</label>
          <textarea
            id="whyUs"
            value={whyUs}
            onChange={(e) => setWhyUs(e.target.value)}
            required
          />
        </div>

        {/* Terms and Conditions */}
        <div className={styles.formGroup}>
          <input
            type="checkbox"
            id="terms"
            required
          />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyNow;
