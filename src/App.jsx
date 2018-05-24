import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import ButtonDocumentation from './components/Documentation/Components/ButtonDocumentation';
import Documentation from './components/Documentation/Documentation';
import PageNotFound from './components/Error/PageNotFound';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/documentation" component={Documentation} />
            <Route
              exact
              path="/documentation/components/button"
              component={ButtonDocumentation}
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Navbar />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
