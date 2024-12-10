import React from 'react';
import '../css/Certifications.css';

const certifications = [
  'Web Development | Coursera',
  'Python Data Structures and Basics of Python | Coursera',
  'Azure Cloud Computing | Verzeo',
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
