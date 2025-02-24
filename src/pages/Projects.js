import React from 'react';
import '../css/Projects.css';

const projects = [
  {
    title: 'Renbsha Consulting Website',
    description: 'Responsive consulting website with chatbot and booking.',
    image: 'https://paradoxmarketing.io/wp-content/uploads/2019/10/a-guide-to-the-different-types-of-consulting-services-min.png',
    link: 'https://www.renbsha.com/',
  },
  {
    title: 'Biryani Ordering Platform',
    description: 'Food ordering app integrating Google Cloud and Stripe.',
    image: 'https://www.cmu.edu/dietrich/news/news-stories/2016/july/images/online-ordering_900x600.jpg',
    link: 'https://test.biryani.com/',
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'Platform for recipe sharing and community engagement.',
    image: 'https://store.nytimes.com/cdn/shop/products/cooking-open_grande.gif?v=1615235630',
    link: 'https://github.com/sevitha7777/ibm-meta',
  },
    {
    title: 'Single-page Applications(SPA)',
    description: 'Developed multiple SPAs using React.js, implementing state management and API integrations. ',
    image: 'https://www.magnolia-cms.com/dam/jcr:d08b7433-ecc0-4007-93f5-bf15c9773523/Page%20Editor%20SPA.png',
    link: 'https://basic2do.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
