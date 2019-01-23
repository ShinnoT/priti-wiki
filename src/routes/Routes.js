import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export const routes = ({ NavBar, Home, SearchResult, Notfound }) => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:search_query" component={SearchResult} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
