import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p>GANESH <span>UTLA</span></p>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'coding', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <div className={`sidebar ${toggle && "active" }`}>
          {toggle && <HiX onClick={() => setToggle(false)} />}
          <ul>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className='social-media-icons'>
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

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
