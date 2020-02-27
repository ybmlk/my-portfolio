import React from 'react';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-4'>
          <span className='copyright'>Copyright &copy; Yonatan Melka 2020</span>
        </div>
        <div className='col-md-4'>
          <ul className='list-inline social-buttons'>
            <li className='list-inline-item'>
              <a href='mailto:yonatan.melka@snc.edu' rel='noopener noreferrer' target='_blank'>
                <i className='fa fa-envelope'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://github.com/ybmlk' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
