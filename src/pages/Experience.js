import React from 'react';
import '../css/Experience.css';

const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Renbsha',
    duration: 'Sep 2024 – Present',
    location: 'OH, USA',
    responsibilities: [
      'Developed a responsive consulting website where users can explore services, industries, and featured insights.',
      'Implemented functionality for booking consultations and chatting with live agents through a chatbot.',
      'Built the front end using React.js and the back end using Node.js and Firebase for robust real-time interactions and scalability.',
    ],
  },
  {
    role: 'Front-end Developer',
    company: 'LTIMindtree',
    duration: 'July 2022 – July 2023',
    location: '',
    responsibilities: [
      'Built a responsive website and mobile app for users to find hospitals and specialized doctors.',
      'Led the development of the UI using React.js, improving user engagement by 25%.',
      'Integrated APIs for real-time data, ensuring 99% data accuracy.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'LTIMindtree',
    duration: 'March 2022 – June 2022',
    responsibilities: [
      'Developed a player scoreboard project as a Java Full Stack Developer, utilizing Spring Boot, AngularJS, and microservices architecture.',
      'Optimized backend processes and front-end responsiveness, leading to a 20% faster load time.',
    ],
  },
  {
    role: 'OCC Lab Consultant',
    company: 'University of Cincinnati',
    duration: 'Aug 2023 – Present',
    location: 'OH, USA',
    responsibilities: [
      'Independently supervised SQL classes, clearing student doubts and improving their performance by 50%.',
      'Managed software installations and resolved technical issues for CEAS students.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.role} | {job.company}</h3>
          <p><em>{job.duration}</em></p>
          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
