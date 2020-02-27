import React from 'react';

import gallery from '../assets/img/gallery-app3.png';
import fortune from '../assets/img/wheel-forture3.png';
import udemy from '../assets/img/udemy-clone3.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'React Gallery App',
      image: gallery,
      live: 'https://react-gallery-app-proj.netlify.com',
      github: 'https://github.com/ybmlk/react-gallery-app-project-7',
      description: `
      Built with React framework a gallery for displaying photos.
      Fetches the photos from Flickr API.
      Allows searching for all kinds of photos.
      Pagination at the bottom allows loading more pages.`,
    },
    {
      title: 'Wheel Of Fortune',
      image: fortune,
      live: 'https://wheel-of-forture.netlify.com/',
      github: 'https://github.com/ybmlk/wheel-of-fortune-project-4',
      description: `
      Built with Vanilla JavaScript for word guessing game. It follows
      Object-oriented programming.
      Fetches a random word from Datamuse API and the user will be given
      five chances to guess the right word.`,
    },
    {
      title: 'Udemy Clone',
      image: udemy,
      live: 'https://github.com/ybmlk/udemy-clone-project-10',
      github: 'https://github.com/ybmlk/udemy-clone-project-10',
      description: `
      Full stack application built with React in front-end, Node.js in
      back-end, and SQLite for database.
      This app is an amateur version of Udemy. 
      User can create, read, update, delete courses`,
    },
  ];
  return (
    <section className='bg-light page-section' id='portfolio'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>Projects</h2>
            <h3 className='section-subheading text-muted'>
              Some of my greatest and latest projects.
            </h3>
          </div>
        </div>

        <div className='row'>
          {projects.map(({ title, image, live, github, description }) => (
            <div className='col-md-4 col-sm-6 portfolio-item' key={title}>
              <div className='portfolio-link' data-toggle='modal'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'>
                    <ul className='list-inline'>
                      <li className='list-inline-item mr-5'>
                        <a
                          className='project'
                          href={live}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          <i className='fa fa-window-maximize fa-3x'></i>
                          <h3 className='section-subheading'>Live Demo</h3>
                        </a>
                      </li>
                      <li className='list-inline-item ml-5'>
                        <a
                          className='project'
                          href={github}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          <i className='fab fa-github fa-3x'></i>
                          <h3 className='section-subheading'>Github Repo</h3>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img className='img-fluid' src={image} alt='' />
              </div>
              <div className='portfolio-caption'>
                <h4>{title}</h4>
                <p className='text-muted'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
