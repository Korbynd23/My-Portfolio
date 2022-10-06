import React from 'react';
import horiseon from '../../images/horiseon.png'
import noteTaker from '../../images/noteTaker.png'
import regex from '../../images/regex.webp'
import techBlog from '../../images/techBlog.png'
import textEditor from '../../images/textEditor.png'
import webApp from '../../images/webApp.png'

export default function Portfolio() {
  return (
    <div>
        <h1>Portfolio</h1>
      <div className='cardCont'>

        <div className="card portCards">
          <img src={horiseon} className="card-img-top imgResize" alt="Business sided website"></img>
          <div className="card-body">
            <p className="card-text cardText">Horiseon Website Refactor</p>
          </div>
        </div>
        <div className="card portCards">
          <img src={noteTaker} className="card-img-top imgResize" alt="Business sided website"></img>
          <div className="card-body">
            <p className="card-text cardText">NoteTaker</p>
          </div>
        </div>
        <div className="card portCards">
          <img src={regex} className="card-img-top imgResize" alt="Business sided website"></img>
          <div className="card-body">
            <p className="card-text cardText">Regex Tutorial</p>
          </div>
        </div>
        <div className="card portCards">
          <img src={techBlog} className="card-img-top imgResize" alt="Business sided website"></img>
          <div className="card-body">
            <p className="card-text cardText">Tech Blog</p>
          </div>
        </div>
        <div className="card portCards">
          <img src={textEditor} className="card-img-top imgResize" alt="Business sided website"></img>
          <div className="card-body">
            <p className="card-text cardText">Text Editor</p>
          </div>
        </div>
        <div className="card portCards">
          <img src={webApp} className="card-img-top imgResize" alt="Business sided website"></img>
          <div className="card-body">
            <p className="card-text cardText">Weather Api</p>
          </div>
        </div>
      </div>
    </div>
  );
}



// TextEditor:    https://limitless-fortress-03145.herokuapp.com/
// NoteTaker:     https://cryptic-bastion-86548.herokuapp.com/
// WeatherApi:    https://korbynd23.github.io/weatherAPI/
// RegexTutorial: https://github.com/Korbynd23/Regex_Tutorial
// Horiseon:      https://korbynd23.github.io/Module1ChallengeKorbyn/
// TechBlog:      https://nameless-ravine-75516.herokuapp.com/      