import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth} from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

      this.setState({ currentUser : user });
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
