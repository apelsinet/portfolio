import React from 'react';

export default class Contactform extends React.Component {
  render() {
    return (
      <form className="cf">
        <div className="half left cf">
          <input type="text" id="input-name" placeholder="Name" required />
          <input type="email" id="input-email" placeholder="Email address" required />
          <input type="text" id="input-subject" placeholder="Subject" required />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    );
  }
}
