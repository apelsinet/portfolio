import React from 'react';
import Burgermenu from './Burgermenu';
import Header from './Header';
import Footer from './Footer';

export default React.createClass({
  render() {
    return (
      <div id="wrapper">
        <Burgermenu />
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
});
