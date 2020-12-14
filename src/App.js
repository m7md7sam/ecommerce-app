import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import {auth} from './firebase/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
