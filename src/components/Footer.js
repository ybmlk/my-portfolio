import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <span className='copyright'>Copyright &copy; Your Website 2019</span>
          </div>
          <div className='col-md-4'>
            <ul className='list-inline social-buttons'>
              <li className='list-inline-item'>
                <a href='#home'>
                  <i className='fa fa-envelope-square'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#home'>
                  <i className='fab fa-github'></i>
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <ul className='list-inline quicklinks'>
              <li className='list-inline-item'>
                <a href='#home'>Privacy Policy</a>
              </li>
              <li className='list-inline-item'>
                <a href='#home'>Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
