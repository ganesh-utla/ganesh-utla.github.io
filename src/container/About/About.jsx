import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {

  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2>

      <div className='about_info'>
        <p className='p-text'>
          Hello there! I'm <span>Ganesh Utla</span>, a passionate fourth-year B.Tech student specializing in Artificial Intelligence 
          and Data Science at Thakur College of Engineering and Technology, Mumbai, India. 
          
          <br /><br />
          As a software developer, I have an insatiable curiosity and a flair for crafting solutions that make an impact. 
          My journey is fueled by a strong belief in the power of teamwork and the joy of collaborative learning. 
          I'm always excited to embrace new challenges and dive into the unconventional. Exploring the unknown is my 
          forte, and sharing my discoveries brings me immense satisfaction. 
          
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
