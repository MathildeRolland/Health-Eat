import React from 'react';
import { Switch, Route, useLocation } from 'react-router';

import HomeTitle from 'src/components/HomeTitle';
import Category from 'src/components/Category';
import Inscription from 'src/components/Inscription';
import Connexion from 'src/containers/Connexion';

import './page.scss';

const Page = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log('Location:',  location);
  console.log('background:', background);

  return (
    <div className="page">
      <Switch location={background || location}>
        <Route path="/" exact>
          <HomeTitle />
          <Category />
        </Route>
        <Route path="/submit">
          <Inscription />
        </Route>
      </Switch>
      
      {
        background && <Route path="/" children={<Connexion />} />
      }
        

    </div>
    
  );
};

export default Page;