import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Profile.scss';
import { urlFor, client } from '../../client';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const query = '*[_type == "coding"]';

    client.fetch(query).then((data) => {
      setProfiles(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Coding <span>Profiles</span></h2>

      <div className="app__profiles">
        {profiles.map((profile, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={profile.title + index}
          >
            <img src={urlFor(profile.imgUrl)} alt={profile.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{profile.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>
                {profile.description}
            </p>
            <p className='coding-profile-text p-text'>
                Profile: <span className='coding-profile-link' onClick={() => window.open(profile.profile, "_blank")}>
                    {profile.profile}
                </span>
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Profile, 'app__coding_profile'),
  'coding',
  'app__primarybg',
);
