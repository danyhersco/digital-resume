import React, { useEffect } from 'react';
import './NavigationBar.css';


const NavigationBar: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector(`.navigation-bar a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLink?.classList.add('active');
          } else {
            navLink?.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return(
    <nav className="navigation-bar">
      <ul>
        <li><a href="#overview">overview</a></li>
        <li><a href="#education">education</a></li>
        <li><a href="#work_experience">work_experience</a></li>
        <li><a href="#activities">activities</a></li>
        <li><a href="#skills">skills</a></li>
        <div className='unavailable-section'>
          <div className="unavailable-section-title">chat</div>
          <div className="coming-soon">SOON</div>
        </div>
      </ul>
    </nav>
  )
}

export default NavigationBar;
