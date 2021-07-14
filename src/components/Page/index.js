import React from 'react';

import HomeTitle from 'src/components/HomeTitle';
import Category from 'src/components/Category';

import './page.scss';

const Page = () => (
  <div className="page">
    <HomeTitle />
    <Category />
  </div>
  
);

export default Page;