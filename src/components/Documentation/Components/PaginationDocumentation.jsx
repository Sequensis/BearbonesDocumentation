import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class PaginationDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h2 className="title">Pagination</h2>
              <p className="subtitle">
                This component is used to display grouped content existing
                between multiple pages.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/pagination/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <nav className="bb-pagination">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
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
                    <nav className="bb-pagination invert">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination primary">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination secondary">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination positive">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination negative">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination invert">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination primary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination secondary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination positive">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination negative">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Sizes</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <nav className="bb-pagination xs">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination sm">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination lg">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination xl">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination xs">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination sm">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination lg">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination xl">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
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
                  <div className="content">
                    <nav className="bb-pagination outline">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination outline primary">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination outline secondary">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination outline positive">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination outline negative">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination outline">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination outline primary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination outline secondary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination outline positive">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination outline negative">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <nav className="bb-pagination connected">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination connected primary">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination connected secondary">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination connected positive">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination connected negative">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination connected">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination connected primary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination connected secondary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination connected positive">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination connected negative">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <nav className="bb-pagination primary no-border">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination primary outline no-border">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination primary connected no-border">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled">...</a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination primary no-border">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination primary outline no-border">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination primary connected no-border">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Dots</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <nav className="bb-pagination primary">
                      <a className="dot" href="#example" />
                      <a className="dot" href="#example" />
                      <a className="dot active" href="#" />
                      <a className="dot" href="#example" />
                    </nav>
                  </div>
                  <div className="content">
                    <nav className="bb-pagination primary outline">
                      <a className="dot" href="#example" />
                      <a className="dot" href="#example" />
                      <a className="dot active" href="#" />
                      <a className="dot" href="#example" />
                    </nav>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<nav class="bb-pagination primary">
  <a class="dot" href="#"></a>
  <a class="dot"></a>
  <a class="dot active" href="#"></a>
  <a class="dot" href="#"></a>
</nav>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<nav class="bb-pagination primary outline">
  <a class="dot" href="#"></a>
  <a class="dot"></a>
  <a class="dot active" href="#"></a>
  <a class="dot" href="#"></a>
</nav>`}
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
