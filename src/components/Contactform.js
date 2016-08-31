import React from 'react';

export default class Contactform extends React.Component {
  render() {
    return (
      <form className="cf" action="mailto:mattiasprada@gmail.com" encType="text/plain" method="post">
        <h3>Contact me</h3>
        <p>Either use my <a href="mailto:mattiasprada@gmail.com">email address</a>, or fill out this form and it will open your email client with your message filled in.</p>
        <div className="half left cf">
          <input name="name" type="text" id="input-name" placeholder="Name" required />
          <input name="email" type="email" id="input-email" placeholder="Email address" required />
          <input name="subject" type="text" id="input-subject" placeholder="Subject" />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    );
  }
}
