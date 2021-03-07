import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Shop from './Componets/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Componets/Review/Review';
import Inventory from './Componets/Inventory/Inventory';
import NotFound from './Componets/NotFound/NotFound';
import ProductDetail from './Componets/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/Shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
              <Review></Review>
          </Route>
          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>
          <Route exact path="/">
              <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
