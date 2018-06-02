import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav
          className="bb-navbar fixed bottom shadow doc-navbar display hidden-lg-up"
          id="bottom-navbar"
        >
          <div className="bb-btns full-x no-border-radius">
            <Link to="/home" className="bb-btn icon">
              <span>
                <i className="fal fa-home" />
              </span>
              Home
            </Link>
            <Link to="/about" className="bb-btn icon">
              <span>
                <i className="fal fa-info" />
              </span>
              About
            </Link>
            {/* <a className="bb-btn icon" href="{{root}}/installation">
                        <span>
                            <i className="fal fa-wrench"></i>
                        </span>
                        Install
                    </a> */}
            <Link to="/documentation" className="bb-btn icon">
              <span>
                <i className="fal fa-file-alt" />
              </span>
              Docs
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
