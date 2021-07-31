import React from 'react';
import { Switch, Route, useLocation } from 'react-router';

import HomeTitle from 'src/components/HomeTitle';
import Category from 'src/components/Category';
import Inscription from 'src/components/Inscription';
import Connexion from 'src/containers/Connexion';
import Contact from 'src/components/Contact';
import User from 'src/components/User';
import Basket from 'src/components/Basket';

import './page.scss';

const Page = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="page">
      <Switch location={background || location}>
        <Route path="/" exact>
          <HomeTitle />
          <Category />
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>
        <Route path="/submit" exact>
          <Inscription />
        </Route>
        {/* <Route path="/panier" exact>
          <Basket />
        </Route> */}
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      
      {
        background && <Route path="/login" children={<Connexion />} />
      }
      {
        background && <Route path="/panier" children={<Basket />} />
      }
        

    </div>
    
  );
};

export default Page;