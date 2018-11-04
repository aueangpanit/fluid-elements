import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SimpleDemo } from '../pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/simpleDemo" component={SimpleDemo} />
      </Switch>
    </BrowserRouter>
  );
};

export { Navigation };
