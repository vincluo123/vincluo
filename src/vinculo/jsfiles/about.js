import React from 'react';
import '../cssfiles/about.css'; // Make sure to import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'

function AboutUs() {
  return (
    <section id="about" className="about" style={{ paddingTop: '20px' }}>
    <div className="container justify-content-center" data-aos="fade-up">
      <div className="row">      
        <div className="col-lg-8 pt-4 pt-lg-0 order-2 order-lg-2  content">
          <h3 className="welcome-heading">About Vinculo</h3>
          <p className="welcome-text">
          Welcome to our online clothing store based in Dindigul, where style meets comfort! We specialize in offering a diverse range of trendy T-shirts for both boys and girls, crafted to elevate your wardrobe with effortless style.<br></br><br></br>

Our journey began with a vision to redefine the fashion landscape in Dindigul, and today, we take pride in curating a collection that resonates with the dynamic preferences of our customers. From classic designs to bold statements, our T-shirts are meticulously designed to cater to every individual's taste and style.<br></br><br></br>

What sets us apart is not just our commitment to quality and style, but also our roots in education and innovation. Our website is the result of the collaborative efforts of 16 bright minds from the CSE department at SSM College. With a passion for technology and a keen eye for design, we've strived to create a seamless online shopping experience that reflects our dedication to excellence.<br></br><br></br>

At our core, we believe in fostering a community where fashion is inclusive and empowering. Whether you're looking for the perfect tee to express yourself or seeking inspiration for your next outfit, we're here to help you find exactly what you're looking for.<br></br>

Thank you for choosing us to be a part of your style journey. Let's redefine fashion, one T-shirt at a time.
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
