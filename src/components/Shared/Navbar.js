import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
      return (
        <div className="container">
            <nav className="bb-navbar fixed bottom shadow doc-navbar" id="bottom-navbar">
                <div className="bb-btns full-x no-border-radius">
                    <Link to="/" className="bb-btn icon">
                        <span>
                            <i className="fal fa-home"></i>
                        </span>
                        Home
                    </Link>
                    <Link to="/about" className="bb-btn icon">
                        <span>
                            <i className="fal fa-info"></i>
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
                            <i className="fal fa-file-alt"></i>
                        </span>
                        Docs
                    </Link>
                </div>
            </nav>
        </div>
      );
    }
  }

export default Navbar
