  import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import InfiniteScroll from './Components/InfiniteScroll';
import Favorites from './Components/Favorites';
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
              <Favorites />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
export default App;
