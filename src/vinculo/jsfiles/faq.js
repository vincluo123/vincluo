import React from 'react';
import '../cssfiles/faq.css'; 

function Faq() {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
      <input id='faq-a' type='checkbox' />
      <label htmlFor='faq-a'>
        <p className="faq-heading">What sizes are available for boys ?</p>
        <div className='faq-arrow'></div>
        <p className="faq-text">We offer boys' T-shirts in sizes ranging from XS to XL.</p>
      </label>
      <input id='faq-b' type='checkbox' />
      <label htmlFor='faq-b'>
        <p className="faq-heading">Do you offer free shipping?</p>
        <div className='faq-arrow'></div>
        <p className="faq-text">Yes, we offer free shipping on all orders</p>
      </label>
      <input id='faq-c' type='checkbox' />
      <label htmlFor='faq-c'>
        <p className="faq-heading">Can I return a T-shirt if it doesn't fit?</p>
        <div className='faq-arrow'></div>
        <p className="faq-text">Yes, you can return any T-shirt within 30 days of purchase if it doesn't fit. Please refer to our return policy for more details.</p>
      </label>
      <input id='faq-d' type='checkbox' />
      {/*<label htmlFor='faq-d'>
        <p className="faq-heading">Are your T-shirts made from sustainable materials?</p>
        <div className='faq-arrow'></div>
        <p className="faq-text">Yes, we are committed to sustainability and use eco-friendly materials in the production of our T-shirts whenever possible.</p>
  </label>*/}
      <input id='faq-e' type='checkbox' />
      <label htmlFor='faq-e'>
        <p className="faq-heading">Do you have a size chart?</p>
        <div className='faq-arrow'></div>
        <p className="faq-text">Yes, you can find our size chart on each product page to help you choose the right size.</p>
      </label>
      <input id='faq-f' type='checkbox' />
      <label htmlFor='faq-f'>
        <p className="faq-heading">How often do you add new designs?</p>
        <div className='faq-arrow'></div>
        <p className="faq-text">We regularly update our collection with new designs, so be sure to check back often!</p>
      </label>
      
    </div>
  );
}

export default Faq;