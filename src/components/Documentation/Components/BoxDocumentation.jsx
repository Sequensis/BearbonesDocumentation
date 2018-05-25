import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class BoxDocumentation extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h2 className="title">Box</h2>
              <p className="subtitle">
                This element is used as a basic container that full widths to
                any element it is within.
              </p>
              <Highlight className="js">
                {"import '../bearbones/sass/components/box/all'"}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="column column-10">
                      <div className="bb-box">
                        <h4 className="title">
                          Nulla erat ligula, ultricies vel aliquet pharetra.
                        </h4>
                        <p className="subtitle p-b-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse ut enim id justo pharetra
                          scelerisque et tincidunt nunc.
                        </p>
                        <a href="#example">Link</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">{``}</Highlight>
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
                  <div className="column column-10">
                    <div className="bb-box invert">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box primary">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box secondary">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box positive">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box negative">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">{``}</Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Styles</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="column column-10">
                    <div className="bb-box outline">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline primary">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline secondary">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline positive">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline negative">
                      <h4>
                        Nulla erat ligula, ultricies vel aliquet pharetra.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">{``}</Highlight>
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
