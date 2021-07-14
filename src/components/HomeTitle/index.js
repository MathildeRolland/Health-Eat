import React from 'react';

import Divider from 'src/components/Divider';

import './home-title.scss';

const HomeTitle = () => (
  <div className="home-title">
    <h1 className="home-title__title">Health'Eat</h1>
    <p className="home-title__paragraph">
        Des plats adaptés à vos besoins et objectifs.
        <br></br>
        Mangez ensemble sans culpabiliser!
    </p>
    <Divider />
  </div>
);

export default HomeTitle;