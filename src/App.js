import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import CheckoutPage from './pages/checkoutpage/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user-selector';

import {createStructuredSelector} from 'reselect';

import './App.css';


class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          });
        });
      }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={()=> this.props.currentUser? (<Redirect to='/'/>) : (<SignInAndSignUp />)} 
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
