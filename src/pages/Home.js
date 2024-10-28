// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>Hi! I'm Sevitha Priya Kannali, a front-end developer with expertise in React.js, SQL, and a background in Computer Science. I enjoy creating efficient and interactive web applications, optimizing backend processes, and exploring new technologies.</p>
        <p>Location: Cincinnati, OH, USA | Phone: (513) 266-1735 | Email: <a href="mailto:sevithapriya136@gmail.com">sevithapriya136@gmail.com</a> | <a href="https://www.linkedin.com/in/sevithakannali/">LinkedIn</a></p>
      </section>

      <section id="experience" className="experience">
        <h2>Professional Experience</h2>
        <div>
          <h3>OCC Lab Consultant | University of Cincinnati</h3>
          <p><em>March 2023 – Present, OH, USA</em></p>
          <ul>
            <li>Supervised classes of 30-40 students, resolving SQL queries and improving their performance by 50%.</li>
            <li>Managed software installations, conducted tests, and resolved technical issues for CEAS students.</li>
          </ul>
        </div>
        <div>
          <h3>Front-end Developer | LTIMindtree</h3>
          <p><em>July 2022 – July 2023</em></p>
          <ul>
            <li>Developed a responsive web app to help users find hospitals and doctors, boosting engagement by 25%.</li>
            <li>Integrated APIs for real-time data, achieving 99% data accuracy.</li>
          </ul>
        </div>
        <div>
          <h3>Software Engineer Intern | LTIMindtree</h3>
          <p><em>March 2022 – June 2022</em></p>
          <ul>
            <li>Developed a player scoreboard using Java Full Stack, Spring Boot, AngularJS, and MySQL.</li>
            <li>Optimized processes, leading to a 20% faster load time and 30% increase in accuracy.</li>
          </ul>
        </div>
      </section>

      <section id="education" className="education">
        <h2>Education</h2>
        <p><strong>Master of Engineering in Computer Science</strong> - University of Cincinnati (3.8 GPA), Aug 2023 – Dec 2024</p>
        <p><strong>Bachelor of Technology in Computer Science</strong> - JNTUACEA (3.4 GPA), July 2018 - April 2022</p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div>
          <h3>Recipe Sharing Platform</h3>
          <p><em>Feb 2024 – Apr 2024</em></p>
          <p>Developed a platform for users to share recipes, supporting 500+ active users and increasing community engagement by 40%.</p>
        </div>
        <div>
          <h3>Personal Portfolio Website</h3>
          <p><em>June 2023 – Aug 2023</em></p>
          <p>Showcased projects and skills through an interactive portfolio, achieving 50% more engagement.</p>
        </div>
        <div>
          <h3>Placement Cell Mobile App</h3>
          <p><em>Jan 2022 – June 2022</em></p>
          <p>Built a job resource app using Flutter and Firebase, helping 100+ students find jobs and improve their skills.</p>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Web Development - Coursera</li>
          <li>Python Data Structures - Coursera</li>
          <li>Azure Cloud Computing - Verzeo</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Phone: (513) 266-1735</p>
        <p>Email: <a href="mailto:sevithapriya136@gmail.com">sevithapriya136@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sevithakannali/">linkedin.com/in/sevithakannali</a></p>
      </section>
    </div>
  );
};

export default Home;
