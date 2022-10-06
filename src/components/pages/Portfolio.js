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
        <h3 className='portText'>Recent Work</h3>
      <div className='cardCont'>

        <div className="card portCards"><a href="https://korbynd23.github.io/Module1ChallengeKorbyn/">
          <img src={horiseon} className="card-img-top imgResize" alt="Business sided website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Horiseon Website Refactor</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://cryptic-bastion-86548.herokuapp.com/">
          <img src={noteTaker} className="card-img-top imgResize" alt="Business sided website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">NoteTaker App</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://github.com/Korbynd23/Regex_Tutorial">
          <img src={regex} className="card-img-top imgResize" alt="Business sided website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Regex Tutorial</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://nameless-ravine-75516.herokuapp.com/">
          <img src={techBlog} className="card-img-top imgResize" alt="Business sided website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Tech Blog</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://limitless-fortress-03145.herokuapp.com/">
          <img src={textEditor} className="card-img-top imgResize" alt="Business sided website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Text Editor App</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://korbynd23.github.io/weatherAPI/">
          <img src={webApp} className="card-img-top imgResize" alt="Business sided website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Weather Forecast</p>
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