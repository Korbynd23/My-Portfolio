import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2 className='resumeText'>Resume</h2>
      <div>
        {/* eslint-disable-next-line */}
        <a href="https://drive.google.com/file/d/1byUB9C7OGES8jeWgEHDVBhIsotEjnB8U/view?usp=sharing" target="_blank" className='resumeText'>Download Resume</a>
      </div>
      <div className='skills'>
        <br></br>
        <h4>Front_end Proficiencies</h4>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <br></br>
        <h4>Back-end Proficiencies</h4>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </div>
    </div>
  );
}
