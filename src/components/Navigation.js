import React from 'react';
import { Component } from 'react';
import { createRef } from 'react';

class Navigation extends Component {
  constructor() {
    super();
    // holds reference to the navbar
    this.navRef = createRef();
    this.state = {
      navBarOffset: null,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState(() => ({ navBarOffset: window.pageYOffset }));
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { navBarOffset } = this.state;
    let { current } = this.navRef;
    if (prevState.navBarOffset !== navBarOffset) {
      // Shrink navbar when scroll down
      if (navBarOffset > 100) {
        current.className = 'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink';
      } else {
        current.className = 'navbar navbar-expand-lg navbar-dark fixed-top ';
      }
    }
  }

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' ref={this.navRef} id='mainNav'>
        <div className='container'>
          <a className='navbar-brand js-scroll-trigger' href='#page-top'>
            Start Bootstrap
          </a>
          <button
            className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu
            <i className='fa fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav text-uppercase ml-auto'>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#services'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#team'>
                  Team
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
