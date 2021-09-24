import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import List from './components/List';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <>
      <Switch>
          <Route path="/home" component={Home}/>
          <Route exact path="/" component={List}/>
          <Route path="/random" component={RandomBeer}/>
          <Route path="/new" component={NewBeer}/>
          <Route path="/:_id" component={BeerDetails}/>
      </Switch>
    </>
  );
}

export default App;
