import React from 'react';
import '../css/Experience.css';

const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Renbsha',
    duration: 'Sep 2024 – Present',
    location: 'OH, USA',
    responsibilities: [
      'Developed a responsive consulting website using React.js, enabling users to explore services, industries, and featured insights.',
'Implemented SEO optimization, increasing organic traffic by 30%, with detailed analytics reports for performance tracking.', 
 'Developed and deployed an AI-powered chatbot using React.js and Firebase, featuring predefined responses, real-time messaging, and seamless live agent integration. Enhanced UI with Material UI for a modern and seamless user experience.',
 ' Built a scalable web application with a React.js front end and a Node.js + Firebase backend, ensuring real-time interactions. Utilized Docker for containerization, reducing deployment time by 20% and improving deployment efficiency'
    ],
  },
  {
    role: 'Front-end Developer',
    company: 'LTIMindtree',
    duration: 'July 2022 – July 2023',
    location: '',
    responsibilities: [
      'Developed and optimized responsive applications using React.js, TypeScript, HTML5, Tailwind CSS, JavaScript, and Bootstrap, enhancing workflow efficiency and improving process speed by 30%',
      'Integrated RESTful APIs for real-time functionality and deployment tools like Docker for efficient project delivery',
      'Ensured high code quality through comprehensive unit testing, peer code reviews, and performance testing, collaborating closely with the QA team to rapidly identify and resolve issues. ',
      'Worked with UI/UX designers to translate Figma prototypes into accessible, cross-browser-compatible designs. Operated in an Agile environment, leveraging Jira for task tracking, sprint planning, and code reviews.'
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'LTIMindtree',
    duration: 'March 2022 – June 2022',
    responsibilities: [
      'Built and optimized React.js components, managed states, and enhanced user interfaces for responsive web applications. ',
      'Collaborated with cross-functional teams using Git and GitHub, contributing to efficient project workflows and version control. ',
    ],
  },
  {
    role: 'OCC Lab Consultant',
    company: 'University of Cincinnati',
    duration: 'Aug 2023 – Present',
    location: 'OH, USA',
    responsibilities: [
      'Independently supervised SQL classes, clearing student doubts and improving their performance by 50%.',
      'Trained students in WordPress, guiding them in building simple web applications and resolving related technical issues. ',
      'Managed software installations and resolved technical issues for CEAS students.',
    ],
  },
  {
    role: 'Frontend developer Intern',
    company: 'Verzeo',
    duration: 'Feb 2021-Jan 2022',
    location: 'Anantaour,India',
    responsibilities: [
      'Developed dynamic, responsive web pages using HTML, CSS, and JavaScript, achieving a 20% improvement in page load times',
      'Converted design wireframes into pixel-perfect, cross-browser compatible interfaces, strengthening early UI/UX skills',
      'Gained practical experience with NoSQL databases and Microsoft Azure, deploying applications that enhanced data reliability'
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
