import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div onClick={() => window.open("https://twitter.com/ganesh_utla", "_blank")}>
      <BsTwitter />
    </div>
    <div onClick={() => window.open("https://www.linkedin.com/in/ganesh-utla-888abc/", "_blank")}>
      <BsLinkedin />
    </div>
    <div onClick={() => window.open("https://www.instagram.com/ganesh_utla/", "_blank")}>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
