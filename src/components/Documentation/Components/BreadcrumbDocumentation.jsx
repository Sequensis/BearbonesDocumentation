import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class BreadcrumbDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Breadcrumb</h1>
              <p className="subtitle">
                A simple component used to display basic navigational structure.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/breadcrumb/all"'}
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
                          The giant panda is actually a bear.
                        </h4>
                        <p className="subtitle">
                          The giant panda also known as panda bear or simply
                          panda, is a bear native to south central China.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div className="bb-box">
  <h4 className="title">
    The giant panda is actually a bear.
  </h4>
  <p className="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
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
                  <div className="column column-10">
                    <div className="bb-box invert">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box primary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box secondary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box positive">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box negative">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div className="bb-box invert">
  <h4 className="title">
    The giant panda is actually a bear.
  </h4>
  <p className="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box primary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box secondary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box positive">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box negative">
  ...
</div>`}
                  </Highlight>
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
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline primary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline secondary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline positive">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline negative">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div className="bb-box outline">
  <h4 className="title">
    The giant panda is actually a bear.
  </h4>
  <p className="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box outline primary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box outline secondary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box outline positive">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-box outline negative">
  ...
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
