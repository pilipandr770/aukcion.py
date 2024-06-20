import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuctionList from './pages/AuctionList';
import AuctionDetail from './pages/AuctionDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuctionList} />
        <Route path="/auctions/:id" component={AuctionDetail} />
      </Switch>
    </Router>
  );
}

export default App;