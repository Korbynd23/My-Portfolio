import React from 'react';
import porforlioImage from '../../images/face.jpg';


export default function About() {
  return (
    <div className='aboutMe'>
      <div className='col-md-12 row justify-content-center background'>
        <p className='col-md-6 order-2 aboutText'>
          Hello! My name is Korbyn Dicari, I am a Full-Stack bootcamp student at The Ohio State University (Grad date - 10/17/22). My skillset includes PWA's, Full-Stack web development, MySQL Databases, NoSQL databases, and React. I am always prepared to learn new skills and love a good challenge. In order to improve my skills, I do a lot of projects to keep my skills up to date.
          On the home page, you can find my current work. I am always coding so check in once in a while, my home page may include some new work! Click on the contact
          tab if you want to get in touch with me, whether its for collaboration on a project, a job offer, or even any questions! I welcome and invite you to get in
          contact with me.
        </p>
        <div className='col-md-3 order-3 faceCont'>
          <img src={porforlioImage} className="facePic" alt="author" width="285" height="325"></img>
        </div>
      </div>
    </div>
  );
}

