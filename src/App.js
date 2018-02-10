import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar'
import Footer from './components/Shared/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Documentation from './components/Documentation/Documentation'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/documentation" component={Documentation}/>

        <Footer />

      </div>
    )
  }
}

export default App;
