import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
			<footer className="bb-footer">
				<div className="container">
					<div className="bb-grid lg">
						<div className="column">
							<div className="text-center">
								<ul className="inline social-links">
									<li className="inline-item">
										<a
											href="https://github.com/humenko"
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="fab fa-github-alt" />
										</a>
									</li>
									<li className="inline-item">
										<a
											href="https://twitter.com/humenko8"
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="fab fa-twitter" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="column">
							<div className="text-center">
								<p className="m-b-3">
									<strong>Bearbones</strong> by{' '}
									<a
										href="https://www.humenko.co.uk"
										rel="noopener noreferrer"
										target="_blank"
									>
										Daniel Humenko
									</a>.
								</p>
								<Link to="/" className="logo" />
							</div>
						</div>
						<div className="column">
							<p className="text-center">
								Code licensed{' '}
								<a
									href="https://github.com/Humenko/Bearbones/blob/master/LICENSE"
									rel="noopener noreferrer"
									target="_blank"
								>
									MIT
								</a>.
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
