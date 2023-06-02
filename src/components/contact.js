import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

const Contact = () => {
  
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Sets the state of email and username
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevents the page from refreshing when submitting the form
    e.preventDefault();

    // Checks to see if the email is valid or if the userName is empty and sends an error message
    if (!validateEmail(email) || !userName || !message) {
      setErrorMessage('Email is invalid or field is missing');
      // Exits out of this code block if something is wrong
      return;
    }
    alert(`Thanks for contacting me, ${userName}!`);

    // Clears the input after it is sent
    setUserName('');
    setMessage('');
    setEmail('');
  };
// creates the html for the form and sets the type of each field
  return (
    <div className='center'>
      <div className='form-card'>
      <form className="form">
        <div className='form-title'>CONTACT ME</div>
        <input className='form-input'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="EMAIL"
        />
        <input className='form-input'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="NAME"
        />
        
        <textarea  className='form-input form-mes'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="MESSAGE"
        />
        
        <button className='submit' type="button" onClick={handleFormSubmit}>SEND</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Contact;