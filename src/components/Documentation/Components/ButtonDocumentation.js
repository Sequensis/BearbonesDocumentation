import React, { Component } from 'react';
import Highlight from 'react-highlight';

class ButtonDocumentation extends Component {
	render() {
		return (
			<div className="section">
				<div className="container">
					<div className="bb-grid md">
						<div className="column column-sm">
							<h2 className="title">Button</h2>
							<p>
								An essential element of any design, providing the user a simple
								way to trigger an event.
							</p>
						</div>
					</div>
					<div className="bb-grid md">
						<div className="column column-sm">
							<h4 className="title">Basic</h4>
							<div className="bb-box example">
								<div className="doc-preview">
									<button className="bb-btn">Button</button>
									<a className="bb-btn m-x-2">Anchor</a>
									<input className="bb-btn" type="submit" value="Input" />
								</div>
								<div className="doc-snippet">
									<Highlight className="html">
										{'<button class="bb-btn">Button</button>'}
									</Highlight>
									<Highlight className="html">
										{'<a class="bb-btn">Anchor</a>'}
									</Highlight>
									<Highlight className="html">
										{'<input class="bb-btn" type="submit" value="Input" />'}
									</Highlight>
									<button className="bb-btn primary doc-copy sm">Copy</button>
								</div>
							</div>
						</div>
					</div>
					<div className="bb-grid md">
						<div className="column column-sm">
							<h4 className="title">Colours</h4>
							<div className="bb-box example">
								<div className="doc-preview">
									<button className="bb-btn primary">Primary</button>
									<button className="bb-btn secondary m-x-2">Secondary</button>
									<button className="bb-btn positive">Positive</button>
									<button className="bb-btn negative m-x-2">Negative</button>
									<button className="bb-btn invert">Invert</button>
								</div>
								<div className="doc-snippet">
									<Highlight className="html">
										{'<button class="bb-btn primary">Primary</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn secondary">Secondary</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn positive">Positive</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn negative">Negative</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn invert">Invert</button>'}
									</Highlight>
									<button className="bb-btn primary doc-copy sm">Copy</button>
								</div>
							</div>
						</div>
					</div>
					<div className="bb-grid md">
						<div className="column column-sm">
							<h4 className="title">Sizes</h4>
							<div className="bb-box example">
								<div className="doc-preview">
									<button className="bb-btn xs">Extra small</button>
									<button className="bb-btn sm m-x-2">Small</button>
									<button className="bb-btn">Medium</button>
									<button className="bb-btn lg m-x-2">Large</button>
									<button className="bb-btn xl">Extra large</button>
								</div>
								<div className="doc-snippet">
									<Highlight className="html">
										{'<button class="bb-btn xs">Extra small</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn small">Small</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn">Medium</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn lg">Large</button>'}
									</Highlight>
									<Highlight className="html">
										{'<button class="bb-btn xl">Extra large</button>'}
									</Highlight>
									<button className="bb-btn primary doc-copy sm">Copy</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ButtonDocumentation;
