import React from 'react';

import Divider from 'src/components/Divider';
import Title from 'src/components/Title';

import './home-title.scss';

const HomeTitle = () => (
  <div className="home-title">
    <Title title="Health'Eat" />
    <p className="home-title__paragraph">
        Des plats adaptés à vos besoins et objectifs.
        <br></br>
        Mangez ensemble sans culpabiliser!
    </p>
    <Divider />
  </div>
);

export default HomeTitle;