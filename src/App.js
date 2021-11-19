import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={ProductListing}/>
          <Route path='/product/:productId' component={ProductDetails}/>
          {/*因为少了一个 '/'  details page 就没有 信息显示 */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;



