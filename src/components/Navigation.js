import React, { Component, createRef } from 'react';

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
        current.classList.add('navbar-shrink');
      } else {
        current.classList.remove('navbar-shrink');
      }
    }
  }

  render() {
    const menuItems = [
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#portfolio' },
      { name: 'About', href: '#about' },
    ];
    return (
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' ref={this.navRef} id='mainNav'>
        <div className='container'>
          <a className='navbar-brand js-scroll-trigger' href='#page-top'>
            Yonatan Melka
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
              {menuItems.map(({ name, href }) => (
                <li className='nav-item' key={name}>
                  <a className='nav-link js-scroll-trigger' href={href}>
                    {name}
                  </a>
                </li>
              ))}
              <li className='nav-item'>
                <a
                  className='nav-link js-scroll-trigger'
                  href='https://drive.google.com/uc?export=download&id=1qTD7PMK61Jpvh1yTPft5z-qPxdPS1ctw'
                  download='Yonatan_Melka_Resume.pdf'
                >
                  Resume <i className='fa fa-download'></i>
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
