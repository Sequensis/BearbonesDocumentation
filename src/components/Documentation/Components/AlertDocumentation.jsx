import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class BoxDocumentation extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h2 className="title">Alert</h2>
              <p className="subtitle">
                This element is used to provide feedback messages for users.
              </p>
              <Highlight className="js">
                {"import '../bearbones/sass/components/alert/all'"}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="bb-alert">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-alert">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Colours</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="bb-alert invert">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert primary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert secondary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert positive">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert negative">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-alert invert">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert primary">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert secondary">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert positive">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert negative">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Close</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="bb-alert primary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="close primary" />
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-alert primary">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <div class="close primary"></div>  
</div>`}
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
