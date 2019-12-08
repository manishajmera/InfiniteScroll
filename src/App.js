  import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import InfiniteScroll from './Components/InfiniteScroll';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Router>
      <Provider store={store} >
        <div>
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <InfiniteScroll />
            </Route>
            <Route path="/favorite">
              <Favorite />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

function Favorite() {
  return (
    <div>
      <h2>favorite</h2>
    </div>
  );
}
export default App;
