import React, {PropTypes} from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <section>
					<object className="svg-about" data={require('../assets/about.svg')} type="image/svg+xml"></object>
          <h1>About me</h1>
        </section>
      </div>
    );
  }
}
