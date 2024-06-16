import React from 'react';

const SectionTitle = ({ title, className }) => (
  <h5 className={`mb-5 text-white ${className}`}>{title}</h5>
);

const LinkList = ({ items, className }) => (
  <ul className={`list-unstyled mb-md-4 mb-lg-0 ${className}`}>
    {items.map((item, index) => (
      <li key={index} className="mb-3">
        <a className="text-light text-decoration-none" href={item.link}>
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const categories = [
    { label: "IOS Developers", link: "#!" },
    { label: "Front-End Developers", link: "#!" },
    { label: "UX Designers", link: "#!" },
    { label: "UI Designers", link: "#!" },
    { label: "Affiliates", link: "#!" },
    { label: "Content Writer", link: "#!" },
    { label: "Program & Tech", link: "#!" }
  ];

  const communityLinks = [
    { label: "Events", link: "#!" },
    { label: "Blog", link: "#!" },
    { label: "Forum", link: "#!" },
    { label: "Podcast", link: "#!" },
    { label: "Affiliates", link: "#!" },
    { label: "Forum", link: "#!" },
    { label: "Invite a Friend", link: "#!" }
  ];

  const aboutLinks = [
    { label: "About Us", link: "#!" },
    { label: "Partnerships", link: "#!" },
    { label: "Finance Experts", link: "#!" },
    { label: "Project Management", link: "#!" },
    { label: "Finance Experts", link: "#!" },
    { label: "The Team", link: "#!" }
  ];

  const contactLinks = [
    { label: "Contact Us", link: "#!" },
    { label: "Press Center", link: "#!" },
    { label: "Careers", link: "#!" },
    { label: "FAQ", link: "#!" },
  ];

  return (
    <div>

  <div className="col-lg-6 mb-0 text-center mx-auto" style={{ width: '100%'}}>
      <img src="./images/Screen.png" alt="Your Image" style={{ width: '100%', height: '500px', marginBottom: '0px' }} />
  </div>
  <section
    className="container-fluid"
    style={{ padding: '100px 20px 80px 40px', backgroundColor: '#0077ff' }}
  >
          <div className="row flex-center py-8">
            <div className="col-lg-6 mb-4 text-center">
              <h1 className="text-white" style={{ paddingBottom: '80px' }}>Get started now</h1>
            </div>
            <div className="col-lg-10 d-flex justify-content-lg-end justify-content-center" style={{ position: 'absolute' }}>
      <form className="row row-cols-lg-auto g-0 align-items-center">
        <div className="col-12 col-lg-8">
          <div className="input-group">
            <input className="rounded-end-0 form-control" id="colFormLabel" type="email" placeholder="email address" />
          </div>
        </div>
        <div className="col-3 col-lg-4" style={{marginTop:'-12px'}}>
          <button className="btn btn-primary rounded-start-0" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>

          <div className="row justify-content-lg-between" style={{margin:'0px 200px'}}>
            <div className="col-6 col-sm-4 col-lg-auto mb-3">
              <SectionTitle title="CATEGORIES" className="ml-3 mr-3" />
              <LinkList items={categories} />
            </div>

            <div className="col-6 col-sm-4 col-lg-auto mb-3">
              <SectionTitle title="COMMUNITY" />
              <LinkList items={communityLinks} />
            </div>

            <div className="col-6 col-sm-4 col-lg-auto mb-3">
              <SectionTitle title="ABOUT" />
              <LinkList items={aboutLinks} />
            </div>

            <div className="col-6 col-sm-4 col-lg-auto mb-3">
              <SectionTitle title="CONTACT" />
              <LinkList items={contactLinks} />
            </div>
          </div>
        </section>
    </div>
  );
};

export default Footer;
