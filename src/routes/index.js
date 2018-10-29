import React from 'react';
import Button from './Button';

import { Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={Button} />
      <Route path="/button" component={Button} />
    </div>
  )
}

export default Router;
