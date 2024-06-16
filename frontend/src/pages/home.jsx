import React from 'react';
import Location from '../components/location'
import HomeContent1 from '../components/home_components/home-content1'
import HomeContent2 from '../components/home_components/home-content2'
import HomeContent3 from '../components/home_components/home-content3'
import ContactForm from '../components/contact-form';
import Footer from '../components/footer'
import '../styling/home-style.css';


const Home = () => {
  return (
  <div>
    <div className='home-container'>

      <section className="home" id="home">
        <div className="text">
          <h1><span>Sewage</span><br /> monitoring<br />Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Debitis minus amet eum odit quod
            aperiam dolor voluptatibus ab! Dolorem magnam
          </p>
          <Location />
        </div>  
      </section>
    </div>
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Home;
