import logo from './logo.svg';
import './App.css';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  
  return (
    <div className="App">
      div
      <section id="home" className="section-home">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="landing-page text-start">
                <div className="landing-page-content">
                  <div className='brand d-flex align-items-center' data-aos="fade-right" data-aos-delay="500">
                    <div className="brand-name text-center">
                      <h3 className='fw-bold text-mint-blue'>UptoDevs</h3>
                    </div>
                  </div>
                  <h1 className="landing-page-title mb-4" data-aos="fade-down" data-aos-delay="300">
                    Our solutions for your business are your success
                  </h1>
                  <p className="landing-page-subtitle" data-aos="fade-right" data-aos-delay="800">
                    We are a team of developers who love to create websites at affordable prices.
                  </p>
                  <div className="landing-page-buttons mt-4" data-aos="fade-right" data-aos-delay="1000">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}> 
                      <button className="btn btn-outline-mint btn-lg w-50">
                        Let's work together!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block" data-aos="fade-left" data-aos-delay="700">
              <div className="landing-page-image">
                <img src={window.location.origin + '/img/desktop-web-dev.png'} className="web-dev" alt="web-dev" width='80%'/>
              </div>
              <div className='position-relative w-100'>
                <div className="background-page-img d-flex align-items-center justify-content-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about" id="about">
        <div className="container">
          <div className="row g-5 mt-5">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200" >
              <div className="about-img d-none d-lg-block">
                <img src={window.location.origin + '/img/UptoDevs-logo.png'} className="about-img" alt="about-img" width='80%'/>    
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content text-start mt-5">
                <h3 className="about-title text-mint-blue fw-bold" data-aos="fade-right" data-aos-delay="500" >About Us</h3>
                <h1 className="about-subtitle mb-4" data-aos="fade-down" data-aos-delay="300">
                  We love to create websites at affordable prices.
                </h1>
                <p className="about-subtext" data-aos="fade-right" data-aos-delay="800">
                  Even we are a start-up company, many of our clients are satisfied with the quality of our work.
                </p>
              </div>
              <div className="about-team">
                <h3 className="about-title text-mint-blue fw-bold text-center" data-aos="fade-left" data-aos-delay="1000">Our Team</h3>
                <div className="row about-team-content mt-4">
                  <div className="col-sm-4 about-team-member" data-aos="fade-up" data-aos-delay="1400">
                    <div className="about-team-member-img">
                      <img src={window.location.origin + '/img/daniel.jpg'} className="about-team-member-img rounded-circle border border-2" alt="about-team-member-img" width='90px'/>
                    </div>
                    <div className="team-member-name mt-2">
                      <h5>Daniel Añonuevo</h5>
                    </div>
                    <div className="team-member-role">
                      <p className="text-muted">Quality Assurance</p>
                    </div>
                  </div>
                  <div className="col-sm-4 about-team-member" data-aos="fade-up" data-aos-delay="1300">
                    <div className="about-team-member-img">
                      <img src={window.location.origin + '/img/raymart.png'} className="about-team-member-img rounded-circle border border-2" alt="about-team-member-img" width='90px'/>
                    </div>
                    <div className="team-member-name mt-2">
                      <h5>Raymart Victoriano</h5>
                    </div>
                    <div className="team-member-role">
                      <p className="text-muted">Back-end Developer</p>
                    </div>
                  </div>
                  <div className="col-sm-4 about-team-member" data-aos="fade-up" data-aos-delay="1200">
                    <div className="about-team-member-img">
                      <img src={window.location.origin + '/img/rics.jpg'} className="about-team-member-img rounded-circle border border-2" alt="about-team-member-img" width='90px'/>
                    </div>
                    <div className="team-member-name mt-2">
                      <h5>Rico Guinanao</h5>
                    </div>
                    <div className="team-member-role">
                      <p className="text-muted">Front-end Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-content text-center w-sm-100 w-md-50 w-lg-25 d-inline-block mx-auto">
                <h3 className="services-title text-mint-blue fw-bold" data-aos="fade-right" data-aos-delay="500">Services</h3>
                <h1 className="services-subtitle mb-4" data-aos="fade-down" data-aos-delay="300">
                  Our Extensive Services
                </h1>
                <p className="services-subtext" data-aos="fade-up" data-aos-delay="600">
                   We offer meaningful solutions that can be expanded to grow with your company or organization over time.
                </p>
              </div>
            </div>
  
            <div class="row g-3">
              <div class="col-lg-4 col-sm-12" data-aos="fade-up" data-aos-delay="800">
                <div class="p-3 service-wrapper border h-100 p-5">
                  <div className="services-item">
                    <div className='d-flex justify-content-center'>
                      <button class="btn btn-outline-mint rounded-circle d-flex align-items-center justify-content-center p-2 mx-1">
                        <i class='bx bxs-palette text-white fs-4' ></i>
                      </button>
                    </div>
                    <div className='service-title'>
                      <h4 className="services-item-title text-white mt-3">Web Design</h4>
                    </div>
                    <div className="service-desc">
                      <p className="services-item-text">
                        We create beautiful websites that are easy to use and easy to maintain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12" data-aos="fade-up" data-aos-delay="1000">
                <div class="p-3 service-wrapper border h-100 p-5">
                  <div className="services-item">
                    <div className='d-flex justify-content-center'>
                      <button class="btn btn-outline-mint rounded-circle d-flex align-items-center justify-content-center p-2 mx-1">
                        <i class='bx bxs-shopping-bags text-white fs-4' ></i>
                      </button>
                    </div>
                    <div className='service-title'>
                      <h4 className="services-item-title text-white mt-3">E-commerce Site</h4>
                    </div>
                    <div className="service-desc">
                      <p className="services-item-text">
                        We offer meaningful solutions that can be expanded to grow with your company or organization over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12" data-aos="fade-up" data-aos-delay="1200">
                <div class="p-3 service-wrapper border h-100 p-5">
                  <div className="services-item">
                    <div className='d-flex justify-content-center'>
                      <button class="btn btn-outline-mint rounded-circle d-flex align-items-center justify-content-center p-2 mx-1">
                        <i class='bx bxs-cloud text-white fs-4' ></i>
                      </button>
                    </div>
                    <div className='service-title'>
                      <h4 className="services-item-title text-white mt-3">Website Deployment</h4>
                    </div>
                    <div className="service-desc">
                      <p className="services-item-text">
                        We deploy your website to the most popular hosting platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-content text-center w-sm-100 w-md-50 w-lg-25 d-inline-block mx-auto">
                <h3 className="contact-title text-mint-blue fw-bold" data-aos="fade-right" data-aos-delay="500">Contact Us</h3>
                <h1 className="contact-subtitle" data-aos="fade-down" data-aos-delay="300">
                  Feel Free to Contact Us
                </h1>
                <p className="contact-subtext" data-aos="fade-up" data-aos-delay="600">
                  We are here to help you with any questions you may have.
                </p>
              </div>
              <div className="contact-form rounded" data-aos="fade-up" data-aos-delay="800">
                <form action="" className='form-contact'>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline-mint btn-block btn-lg w-100">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
