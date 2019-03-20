import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import StartGame from './StartGame';
const Round = React.lazy(() => import("./Round"));

function createWrapper(LazyCmp) {
  return (props) => (
    <Suspense
      fallback={<div>Loading...</div>}>
      <LazyCmp {...props}/>
    </Suspense>
  )
}
const RoundWrapper = createWrapper(Round);

export default function Routes() {
  return (
    <div>
      <Route exact path='/' component={StartGame} />
      <Route exact path='/round' component={RoundWrapper} />
    </div>
  )
}