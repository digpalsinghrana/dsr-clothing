import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shoppage/shop.component.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
