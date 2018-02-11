import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar'
import Footer from './components/Shared/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Documentation from './components/Documentation/Documentation'
import PageNotFound from './components/Error/PageNotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/documentation" component={Documentation}/>
            <Route component={PageNotFound} />
          </Switch>
        <Footer />

      </div>
    )
  }
}

export default App;
