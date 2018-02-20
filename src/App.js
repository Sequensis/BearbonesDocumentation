import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Documentation from './components/Documentation/Documentation';
import ButtonDocumentation from './components/Documentation/Components/ButtonDocumentation';
import PageNotFound from './components/Error/PageNotFound';

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
