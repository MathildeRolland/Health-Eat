import React from 'react';
import { Route } from 'react-router';

import HomeTitle from 'src/components/HomeTitle';
import Category from 'src/components/Category';
import Inscription from 'src/components/Inscription';

import './page.scss';

const Page = () => (
  <div className="page">
      <Route path="/" exact>
        <HomeTitle />
        <Category />
      </Route>
      <Route path="/submit">
        <Inscription />
      </Route>
      <Route path="/login">
      </Route>
  </div>
  
);

export default Page;