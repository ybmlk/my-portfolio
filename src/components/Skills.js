import React from 'react';

const Skills = () => {
  const skillsArray = [
    { code: 'html5', name: 'HTML5' },
    { code: 'css3-alt', name: 'CSS3' },
    { code: 'python', name: 'Python 3' },
    { code: 'js', name: 'JavaScript' },
    { code: 'react', name: 'React' },
    { code: 'node-js', name: 'Node.js' },
    { code: 'git-alt', name: 'GIT' },
    { code: 'npm', name: 'NPM' },
    { code: 'linux', name: 'Linux' },
  ];

  const handleMouseOver = e => {
    e.target.classList.add('text-primary');
    console.log();
    // e.target.className = 'fa-stack fa-3x text-primary';
  };

  const handleMouseOut = e => {
    e.target.classList.remove('text-primary');
  };

  return (
    <section className='page-section' id='skills'>
      <div className='container mb-0'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>Skills</h2>
            <h3 className='section-subheading text-muted'>
              Programming Languages and Technologies
            </h3>
          </div>
        </div>

        <div className='col-md-8 text-center m-auto'>
          <ul className='list-inline'>
            {skillsArray.map(item => (
              <li className='list-inline-item mb-4' key={item.code}>
                <span
                  className='fa-stack fa-3x '
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <i className='fa fa-circle fa-stack-2x'></i>
                  <i className={`fab fa-${item.code} fa-stack-1x fa-inverse`}></i>
                </span>
                <h5 className='text-muted'>{item.name}</h5>
              </li>
            ))}
            <li className='list-inline-item mb-4'>
              <span
                className='fa-stack fa-3x '
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <i className='fa fa-circle fa-stack-2x'></i>
                <i className={`fa fa-database fa-stack-1x fa-inverse`}></i>
              </span>
              <h5 className='text-muted'>SQL</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
