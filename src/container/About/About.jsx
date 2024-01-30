import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {

  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2>

      <div className='about_info'>
        <p className='p-text'>
          Hello there! I'm <span>Ganesh Utla</span>, a passionate final year B.Tech student specializing in Artificial Intelligence 
          and Data Science at Thakur College of Engineering and Technology, Mumbai, India. 
          
          <br /><br />
          I'm a curious software engineer who loves building things that matter. I believe teamwork and learning together are key to success. I'm always up for new challenges, even the weird ones! I code in different languages and want to learn even more. I would love to join hackathons for the amazing experience. In my free time, I freelance as a full-stack web developer. Right now, I'm learning React Native to build Android apps.
          
          <br /><br />
          Join me in this dynamic journey of learning, creating, and making a mark together!
        </p>

        <div className='about_btns'>
          <button type="button" onClick={() => window.open("/Ganesh_Utla_Resume.pdf", "_blank")}>
            Checkout Resume
          </button>
          <button type="button" onClick={() => window.open("https://linkedin.com/in/ganesh-utla-888abc", "_blank")}>
            Connect with Me
          </button>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
