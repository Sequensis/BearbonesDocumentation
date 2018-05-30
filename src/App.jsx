import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from './components/About/About';
import AlertDocumentation from './components/Documentation/Components/AlertDocumentation';
import BoxDocumentation from './components/Documentation/Components/BoxDocumentation';
import ButtonDocumentation from './components/Documentation/Components/ButtonDocumentation';
import DividerDocumentation from './components/Documentation/Components/DividerDocumentation';
import FooterDocumentation from './components/Documentation/Components/FooterDocumentation';
import MediaDocumentation from './components/Documentation/Components/MediaDocumentation';
import Documentation from './components/Documentation/Documentation';
import PageNotFound from './components/Error/PageNotFound';
import Home from './components/Home/Home';
import DocumentationNavigation from './components/Shared/DocumentationNavigation';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Route path="/documentation" component={DocumentationNavigation} />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="doc-page-animation"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route
                      exact
                      path="/documentation"
                      component={Documentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/alert"
                      component={AlertDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/box"
                      component={BoxDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/button"
                      component={ButtonDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/divider"
                      component={DividerDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/footer"
                      component={FooterDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/media"
                      component={MediaDocumentation}
                    />
                    <Route path="*" component={PageNotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </main>
        {/* <Navbar />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
