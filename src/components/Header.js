import React from 'react';

const Header = () => {
  return (
    <header className='masthead'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-heading text-uppercase'>I am Yonatan!</div>
          <div className='intro-lead-in mb-4'>Welcome To My Portfolio</div>
          <a className='btn btn-primary btn-xl text-uppercase js-scroll-trigger mt-4' href='#portfolio'>
            Go To Projects
          </a>
        </div>
      </div>
      <div className='color-overlay'></div>
    </header>
  );
};

export default Header;
