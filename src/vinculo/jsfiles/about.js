import React from 'react';
import '../cssfiles/about.css'; // Make sure to import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutData from '../jsonfiles/aboutData.json'; // Import JSON data

function AboutUs() {
  return (
    <section id="about" className="about" style={{ paddingTop: '20px' }}>
      <div className="container justify-content-center" data-aos="fade-up">
        <div className="row">      
          <div className="col-lg-8 pt-4 pt-lg-0 order-2 order-lg-2  content">
            <h3 className="welcome-heading">About Vinculo</h3>
            <p className="welcome-text">
              {aboutData.paragraph}
            </p>
          </div>
          <div className="col-lg-4 order-1 order-lg-1 content" data-aos="fade-left" data-aos-delay="100">
            <img src="vinculo_about.png" className="img-fluid logo" alt="ssmlogo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
