import React, { Component } from 'react';
import DocumentationVariabes from '../../Shared/DocumentationVariables';

export default class SpacingDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Spacing</h1>
              <p className="subtitle">
                This helper is for setting the margin and / or padding of
                various elements, using this method is a lot more efficient and
                manageable than creating your own classes.
              </p>
            </div>
            <DocumentationVariabes name="$Spacer" value="1rem" />
          </div>
          <div className="bb-grid md">
            <div className="column column-8">
              <h4 className="title">Basic</h4>
              <p className="subtitle sm">
                <ul>
                  <li>
                    The first letter specifies whether you’re targeting the
                    margin or padding.
                  </li>
                  <li>
                    The second letter specifies the direction of the spacing.
                  </li>
                  <li>
                    The third letter specifies the amount of spacing, relative
                    to the initial variable.
                  </li>
                </ul>
              </p>
            </div>
            <div className="column column-8">
              <table className="bb-table striped full-x">
                <tbody>
                  <tr className="primary font-weight-bold">
                    <td>First letter</td>
                    <td>Second letter</td>
                    <td>Third letter</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-weight-bold">m</span> (margin)
                    </td>
                    <td>
                      <span className="font-weight-bold">-</span> (all)
                    </td>
                    <td>
                      <span className="font-weight-bold">0</span> (none)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-weight-bold">p</span> (padding)
                    </td>
                    <td>
                      <span className="font-weight-bold">-t-</span> (top)
                    </td>
                    <td>
                      <span className="font-weight-bold">1</span> (initial -
                      .5rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-r-</span> (right)
                    </td>
                    <td>
                      <span className="font-weight-bold">2</span> (initial -
                      .25rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-b-</span> (bottom)
                    </td>
                    <td>
                      <span className="font-weight-bold">3</span> (initial)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-l-</span> (left)
                    </td>
                    <td>
                      <span className="font-weight-bold">4</span> (initial +
                      .25rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-x-</span> (horizontal)
                    </td>
                    <td>
                      <span className="font-weight-bold">5</span> (initial +
                      .5rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-y-</span> (vertical)
                    </td>
                    <td>
                      <span className="font-weight-bold">auto</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
