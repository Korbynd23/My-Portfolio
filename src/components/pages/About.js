import React from 'react';
import porforlioImage from '../../images/face.jpg';

export default function About() {
  return (
    <div className='aboutMe'>
      <div className='col-md-12 row justify-content-center background'>
        <p className='col-md-6 order-2'>
          Hello! My name is Korbyn Dicari. I am new to coding and currently taking a Coding Boot Camp through Trilogy at Ohio State University. Although this is a new career route for me, I have spent 8+ years running and managing multi-million dollar restaraunt establishments everywhere from Chicago to Hawaii. After leaving the food industry I enrolled in Universal Technical Institute  (Pheonix, AZ), in which I studied Automotive and Diesel Technolgies. Upon completetion of my education in Phoenix I relocated to Columbus in 2018 and accepted a job as a traveling field tech with a storage solutions company. My primary work included diagnosing and repairing multiple types of equipment from electric forklifts to conveyors, some of my clients included Amazon, Big Lots, L Brands and Freightliner. As time progressed working became alot more "tech" technical, alot less mechanical fixes and more automation, software and server repairs. This type of work had reaffirmed my love for technology and pushed me to further my education. All this put me right here in the Coding Boot Camp with a creative drive and a strong ambition for learning to take my career to the next level.
        </p>
        <div className='col-md-3 order-3'>
          <img src={ porforlioImage } className="facePic" alt="author" width="300" height="325"></img>
        </div>
      </div>
    </div>
  );
}

