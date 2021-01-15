import React from 'react';

const About = () => {
  const contacts = [
    {
      icon: 'fa fa-envelope',
      info: 'Email: yonatan.melka@snc.edu',
      link: 'mailto:yonatan.melka@snc.edu',
    },
    { icon: 'fa fa-phone-alt', info: 'Phone: (920) 632-3958' },
    { icon: 'fab fa-github', info: 'Github: github.com/ybmlk', link: 'https://github.com/ybmlk' },
    { icon: 'fa fa-map-marker-alt', info: 'Address: De Pere, WI 54115' },
  ];
  return (
    <section className='page-section' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>About</h2>
            <h3 className='section-subheading text-muted'>A little bit about myself.</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-7 ml-auto'>
            <div className='timeline-heading'>
              <h2>Bio</h2>
            </div>
            <div className='timeline-body'>
              <p style={{ textAlign: 'justify' }}>
                My name is Yonatan Melka, and I am a a full-stack software engineer focused on
                frontend development and recent graduate of St. Norbert College with summa cum
                laude(3.9 GPA). Interested in building scalable practical applications and learning
                new technologies along the way. I have included my skills{' '}
                <a href='#skills'> here. </a> <br />
                <br /> I am a ferocious learner, a team player, and highly adaptable to new
                environments. I have a strong work ethic which allowed me to succeed in my school
                work. I have worked on several personal projects. I have included some of them{' '}
                <a href='#portfolio'> here. </a>
              </p>
            </div>
          </div>

          <div className='col-md-4 ml-auto'>
            <div className='timeline-heading'>
              <h2>Contact</h2>
            </div>
            <div className='timeline-body'>
              <ul className='list-group'>
                {contacts.map(({ icon, info, link }) => {
                  if (link) {
                    return (
                      <li className='list-group-item'>
                        <a
                          className='contact-link'
                          href={link}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          <i className={icon}></i> &#160; {info}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li className='list-group-item'>
                        <i className={icon}></i> &#160; {info}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
