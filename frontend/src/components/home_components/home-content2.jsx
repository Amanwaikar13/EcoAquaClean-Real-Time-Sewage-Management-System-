import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styling/home-component-style.css';

const HomeContent2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='big-container'>
      <section className='small-section' data-aos='fade-up'>
        <div className='small-text-info-container' data-aos='fade-right'>
          <h2 className='small-title'>Data You Can Trust</h2>
          <h3 className='small-subtitle'>01. Fast & Agile</h3>
          <p className='small-text'>
            i'm a paragraph. Click here to add you own text and edit me it's easy. Just click "Edit Text" or double click
            me to add your own content and make changes to the font.
          </p>
          <h3 className='small-subtitle'>02. Cost-Effective</h3>
          <p className='small-text'>
            i'm a paragraph. Click here to add you own text and edit me it's easy. Just click "Edit Text" or double click
            me to add your own content and make changes to the font.
          </p>
          <h3 className='small-subtitle'>03. Real-Time Analytics</h3>
          <p className='small-text'>
            i'm a paragraph. Click here to add you own text and edit me it's easy. Just click "Edit Text" or double click
            me to add your own content and make changes to the font.
          </p>
          {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="amanwaikar" data-version="v1">
          <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/amanwaikar?trk=profile-badge">Aman Waikar</a></div> */}
        </div>
        <div className='small-image-container' data-aos='fade-left'>
          <img src='./images/At-the-office-amico.png' alt='Office' className='small-image' />
        </div>
      </section>
    </div>
  );
};

export default HomeContent2;
