import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import styles from './JobOpenings.module.css'; // Import the CSS Module

const JobOpenings = () => {
  const [jobList, setJobList] = useState([
    { title: 'Software Engineer', company: 'Tech Corp', location: 'New York, NY', description: 'Develop and maintain software applications.' },
    { title: 'Data Scientist', company: 'DataX Solutions', location: 'San Francisco, CA', description: 'Analyze data to help businesses make data-driven decisions.' },
    { title: 'Web Developer', company: 'Webify', location: 'Austin, TX', description: 'Build and design responsive websites and applications.' },
    { title: 'Mobile App Developer', company: 'Appify', location: 'Los Angeles, CA', description: 'Develop mobile applications for iOS and Android.' },
    { title: 'Product Manager', company: 'Innovative Minds', location: 'Chicago, IL', description: 'Lead product strategy and development.' },
    { title: 'UX/UI Designer', company: 'DesignPro', location: 'Seattle, WA', description: 'Design user-friendly interfaces and experiences.' },
    { title: 'Data Engineer', company: 'DataX Solutions', location: 'San Francisco, CA', description: 'Build data pipelines and architecture.' },
    { title: 'DevOps Engineer', company: 'CloudTech', location: 'Dallas, TX', description: 'Automate and streamline operations and deployments.' },
    { title: 'Frontend Developer', company: 'CodeLabs', location: 'Denver, CO', description: 'Build and maintain the front end of web applications.' },
    { title: 'Backend Developer', company: 'TechWorks', location: 'Boston, MA', description: 'Work on the server-side logic and database management.' },
    { title: 'Network Engineer', company: 'NetWorld', location: 'Miami, FL', description: 'Maintain and optimize network infrastructure.' },
    { title: 'Cybersecurity Analyst', company: 'SecureTech', location: 'Austin, TX', description: 'Protect systems and networks from security breaches.' },
    { title: 'System Administrator', company: 'TechOps', location: 'Houston, TX', description: 'Manage and maintain IT systems and networks.' },
    { title: 'AI Researcher', company: 'AI Labs', location: 'Palo Alto, CA', description: 'Research and develop AI technologies.' },
    { title: 'Full Stack Developer', company: 'Webify', location: 'Chicago, IL', description: 'Develop both client and server-side applications.' },
    { title: 'Business Analyst', company: 'TechConsult', location: 'New York, NY', description: 'Analyze business processes and provide solutions.' },
    { title: 'Game Developer', company: 'GameX Studios', location: 'Los Angeles, CA', description: 'Develop and design video games.' },
    { title: 'Quality Assurance Engineer', company: 'TechVerify', location: 'San Francisco, CA', description: 'Test and ensure the quality of software products.' },
    { title: 'Database Administrator', company: 'DataPro', location: 'Austin, TX', description: 'Manage and optimize databases.' },
    { title: 'Cloud Solutions Architect', company: 'CloudTech', location: 'Seattle, WA', description: 'Design and implement cloud-based solutions.' },
    { title: 'Blockchain Developer', company: 'CryptoTech', location: 'New York, NY', description: 'Develop blockchain applications and platforms.' },
    { title: 'Software Tester', company: 'Testify', location: 'San Francisco, CA', description: 'Test software to identify bugs and issues.' },
    { title: 'IT Support Specialist', company: 'SupportTech', location: 'Austin, TX', description: 'Provide technical support for IT-related issues.' },
    { title: 'Embedded Systems Engineer', company: 'TechLabs', location: 'San Jose, CA', description: 'Develop software for embedded systems.' },
    { title: 'Cloud Developer', company: 'CloudWorks', location: 'Miami, FL', description: 'Develop applications and services for the cloud.' },
    { title: 'AI Engineer', company: 'AI Innovations', location: 'Boston, MA', description: 'Build and implement AI solutions.' },
    { title: 'Product Designer', company: 'DesignCraft', location: 'Chicago, IL', description: 'Design products and features for web applications.' },
    { title: 'Solutions Architect', company: 'TechSolutions', location: 'Dallas, TX', description: 'Design software solutions for complex problems.' },
    { title: 'SEO Specialist', company: 'WebRank', location: 'Los Angeles, CA', description: 'Optimize websites to rank higher in search engines.' },
    { title: 'IT Manager', company: 'TechMinds', location: 'New York, NY', description: 'Manage IT operations and teams.' },
    { title: 'Marketing Analyst', company: 'MarketTech', location: 'San Francisco, CA', description: 'Analyze marketing data and provide insights.' },
    { title: 'Customer Support Engineer', company: 'SupportX', location: 'Seattle, WA', description: 'Assist customers with technical issues and product inquiries.' },
    { title: 'Business Development Manager', company: 'BizTech', location: 'Chicago, IL', description: 'Drive business growth through partnerships and strategy.' }
  ]);

  return (
    <div className={styles.jobOpeningsContainer}>
      <h1><center>Welcome Future Professionals</center></h1>
      <h2>Job Openings</h2>
      <div className={styles.jobList}>
        {jobList.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.jobCompany}>{job.company}</p>
            <p className={styles.jobLocation}>{job.location}</p>
            <p className={styles.jobDescription}>{job.description}</p>
            <Link to={`/apply-now?job=${job.title}`} className={styles.applyButton}>
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpenings;
