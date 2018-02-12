import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BearbonesLogo from '../../images/bb-logo.svg';

class Navbar extends Component {
    render() {
      return (
        <div className='container'>
            <nav className='bb-navbar fixed shadow display' id='top-navbar'>
                <div className='brand justify-content-between'>
                    <Link to='/home' className='item'>
                        <img src={BearbonesLogo} alt='Bearbones logo' />
                    </Link>
                    <div className='item'>
                        <a className='item' href='https://github.com/humenko' rel='noopener noreferrer' target='_blank'>
                            <i className='fab fa-github-alt text-xl' aria-hidden='true'></i>
                        </a>
                        <a className='item' href='https://twitter.com/humenko8' rel='noopener noreferrer' target='_blank'>
                            <i className='fab fa-twitter text-xl' aria-hidden='true'></i>
                        </a>
                        <div className='item hidden-lg-down'>
                            <a className='bb-btn positive'>Download</a>                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
      );
    }
  }

export default Navbar
