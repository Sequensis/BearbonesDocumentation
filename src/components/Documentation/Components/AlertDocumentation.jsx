import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class AlertDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Alert</h1>
              <p className="subtitle">
                This component is used to provide feedback messages for users.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/alert/all"'}
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
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-alert">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
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
                    <div className="bb-alert primary">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert secondary">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert positive">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert negative">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="bb-alert invert">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-alert primary">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert secondary">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert positive">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert negative">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-alert invert">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
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
                    <div className="bb-alert">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                      <div className="close" />
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-alert">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
  <div class="close"></div>                        
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
