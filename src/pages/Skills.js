import React from 'react';
import '../css/Skills.css';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C', logo: 'https://www.britefish.net/wp-content/uploads/2019/07/logo-c-1.png' },
      { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' },
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
    ],
  },
  {
    category: 'Web and Cloud Technologies',
    items: [
      { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
      { name: 'JavaScript', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s' },
      { name: 'Azure', logo: 'https://onedata.ai/wp-content/uploads/2024/02/azure-cloud.png' },
      {name: 'Postman' , logo:'https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj'},
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React.js', logo: 'https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png' },
      { name: 'Spring Boot', logo: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png' },
      { name: 'AngularJS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqzMqxo3FdmgI207Z1QuXm6ndnJxp7QGm_g&s' },
      { name: 'Flutter', logo: 'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png' },
    ],
  },
  {
    category: 'Database Technologies',
    items: [
      { name: 'MySQL', logo: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png' },
      { name: 'Firebase', logo: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png' },
    ],
  },
  {
    category: 'Version Control & IDEs',
    items: [
      { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png' },
      { name: 'Visual Studio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/800px-Visual_Studio_Icon_2022.svg.png' },
      { name: 'Eclipse', logo: 'https://miro.medium.com/v2/resize:fit:540/1*nNTk-j2uaKhxyj3GXsYNdg.png' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h3>{skillCategory.category}</h3>
          <div className="skill-items">
            {skillCategory.items.map((skill, i) => (
              <div key={i} className="skill-item">
                <img src={skill.logo} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
