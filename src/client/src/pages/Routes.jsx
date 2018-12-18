import React from 'react';
import { Route } from "react-router-dom";
import StartGame from './StartGame';
import Round from './Round';

export default function Routes() {
  return (
    <div>
        <Route exact path='/' component={StartGame}/>
        <Route exact path='/round' component={Round}/>
    </div>
  )
}