import React from 'react';

import telegramBot from '../assets/img/telegram.PNG';
import pathFinder from '../assets/img/path-finder.PNG';
import sorting from '../assets/img/udemy-clone3.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'eBook Downloader Bot',
      image: telegramBot,
      live: 'https://telegram.me/yoni_book_bot',
      github: 'https://github.com/ybmlk/telegram-book-download',
      description: `
      Telegram bot that allows users to search and download eBooks.
      Over 200 users have downloaded close to 900 books.
      Popular in developing countries with slow internet connection.`,
    },
    {
      title: 'Path Finding Visualizer',
      image: pathFinder,
      live: 'https://pathfinding-visualizer-ybmlk.netlify.app/',
      github: 'https://github.com/ybmlk/pathfinding-visualizer',
      description: `
      Web application built with React framework for visualizing 
      shortest path finding and maze-generation algorithms. 
      Implements Dijkstra's shortest path algorithm `,
    },
    {
      title: 'Sorting Visualizer',
      image: sorting,
      live: 'https://wheel-of-forture.netlify.com/',
      github: 'https://github.com/ybmlk/udemy-clone-project-10',
      description: `
      Web application built with JavaScript for visualizing sorting algorithms 
      Implements Merge Sort, Quick Sort, Heap Sort, and Bubble Sort`,
    },
  ];
  return (
    <section className='bg-light page-section' id='portfolio'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>Projects</h2>
            <h3 className='section-subheading text-muted'>
              Some of my latest and greatest projects.
            </h3>
          </div>
        </div>

        <div className='row'>
          {projects.map(({ title, image, live, github, description }) => (
            <div className='col-md-4 col-sm-6 portfolio-item' key={title}>
              <div className='portfolio-link' data-toggle='modal'>
                <div style={{ zIndex: 9 }} className='portfolio-hover'>
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
                <div
                  style={{
                    height: '260px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}
                >
                  <img style={{ objectFit: 'cover' }} className='img-fluid' src={image} alt='' />
                </div>
              </div>
              <div style={{ height: '220px' }} className='portfolio-caption'>
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
