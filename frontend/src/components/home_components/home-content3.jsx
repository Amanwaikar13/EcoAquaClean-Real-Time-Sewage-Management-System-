import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styling/home-component-style.css';

const HomeContent3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <div className='big-container'>
      <section className='big-section'>
        <div className='img-container' data-aos='fade-left'>
          <img src='./images/Data extraction-amico.png' alt='Office' className='big-image' />
        </div>
        <div className='text-info-container' data-aos='fade-right'>
          <h2 className='small-title'>Your headline goes here</h2>
          <p className='small-text'>
            Cox and Box, also known as The Long-Lost Brothers, is a one-act comic opera with a libretto by F. C. Burnand
            and music by Arthur Sullivan, based on the 1847 farce Box and Cox by John Maddison Morton. It premiered in
            1866 and was Sullivan's first successful comic opera. The story concerns a landlord who lets a room to two
            lodgers, one who works at night and one who works during the day. When one of them has the day off, they
            meet each other in the room and tempers flare. Sullivan wrote this piece five years before Thespis, his
            first opera with W. S. Gilbert.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent3;
