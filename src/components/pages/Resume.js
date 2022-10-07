import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2 className='resumeText'>_</h2>
      <div>
        {/* eslint-disable-next-line */}
        <a href="https://drive.google.com/file/d/1byUB9C7OGES8jeWgEHDVBhIsotEjnB8U/view?usp=sharing" target="_blank" className='resumeText'>Download Resume</a>
      </div>
      <div className='skills' >
        <div className='col-4 centered'>
          <h4 className='resText'>Front-end Proficiencies:</h4>
          <div className='pTag'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
            <p>responsive design</p>
            <p>React</p>
            <p>Bootstrap</p>
          </div>
        </div>
        <div className='col-4 centered'>
          <h4 className='resText'>Back-end Proficiencies:</h4>
          <div className='pTag'>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySql Sequepze</p>
            <p>MongoDB, Mongoose</p>
            <p>REST</p>
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
