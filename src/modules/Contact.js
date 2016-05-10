import React, {PropTypes} from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <section>
					<object className="svg-contact" data={require('../assets/contact.svg')} type="image/svg+xml"></object>
          <h1>Contact me</h1>
        </section>
      </div>
    );
  }
}
