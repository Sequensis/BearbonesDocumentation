import React, { Component } from 'react';

export default class DocumentationVariables extends Component {
  render() {
    return (
      <div className="column column-16 m-y-5">
        <h4>Variables</h4>
        <div className="column column-6">
          <table className="bb-table striped full-x m-t-3">
            <tbody>
              <tr className="font-weight-bold">
                <td>Name</td>
                <td>Value</td>
              </tr>
              <tr>
                <td>
                  <code>{this.props.name}</code>
                </td>
                <td>
                  <code>{this.props.value}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
