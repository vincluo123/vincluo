import React from 'react';
import '../cssfiles/about.css'; // Make sure to import your CSS file

function AboutUs() {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="about-me-container">
          <div className="about-me-title">
             About Vinculo  {/* Use <br /> for line break */}
          </div>

          <div className="about-me-flex-container">
            <div className="about-me-image">
              <div className="back-div"></div>
              <div className="black-image"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg" alt="black" /></div>
              <div className="main-image"><img src="https://i.pinimg.com/originals/50/99/0e/50990edc5a837be62543869090f29a8c.jpg" alt="smit" /></div>
            </div>
            <div className="about-me-content">

             
              <div className="text">
              Welcome to our online clothing store based in Dindigul, where style meets comfort! We specialize in offering a diverse range of trendy T-shirts for both boys and girls, crafted to elevate your wardrobe with effortless style.<br></br>

Our journey began with a vision to redefine the fashion landscape in Dindigul, and today, we take pride in curating a collection that resonates with the dynamic preferences of our customers. From classic designs to bold statements, our T-shirts are meticulously designed to cater to every individual's taste and style.<br></br>

What sets us apart is not just our commitment to quality and style, but also our roots in education and innovation. Our website is the result of the collaborative efforts of 16 bright minds from the CSE department at SSM College. With a passion for technology and a keen eye for design, we've strived to create a seamless online shopping experience that reflects our dedication to excellence.<br></br>

At our core, we believe in fostering a community where fashion is inclusive and empowering. Whether you're looking for the perfect tee to express yourself or seeking inspiration for your next outfit, we're here to help you find exactly what you're looking for.<br></br>

Thank you for choosing us to be a part of your style journey. Let's redefine fashion, one T-shirt at a time.<br></br>
              </div>
            </div>
          </div>

        

        </div>

      </div>
    </section>
  );
}

export default AboutUs;
