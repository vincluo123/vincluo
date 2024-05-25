import React, { useEffect, useState } from 'react';
import '../cssfiles/faq.css';
import faqData from '../jsonfiles/Faq.json';

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  return (
    <div className='main'>
      <div className='side'>
        
        <div className='faq'>
          <h1>Frequently Asked Questions</h1>
          {faqs.map(faq => (
            <div key={faq.id}>
              <input id={faq.id} type='checkbox' />
              <label htmlFor={faq.id}>
                <p className="faq-heading">{faq.question}</p>
                <div className='faq-arrow'></div>
                <p className="faq-text">{faq.answer}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
