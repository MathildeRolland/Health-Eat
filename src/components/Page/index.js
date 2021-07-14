import React from 'react';
import { Route } from 'react-router';

import HomeTitle from 'src/components/HomeTitle';
import Category from 'src/components/Category';
import Title from 'src/components/Title';
import Inscription from 'src/components/Inscription';

import './page.scss';

const Page = () => (
  <div className="page">
    <Route path="/" exact>
      <HomeTitle />
      <Category />
    </Route>
    <Route path="/submit" exact>
      <Title title="INSCRIPTION" />
      <Inscription />
    </Route>
    <Route path="/login" exact>
      <Title title="SE CONNECTER" />
    </Route>
  </div>
  
);

export default Page;