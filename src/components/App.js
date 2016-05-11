import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  componentDidUpdate() {
    window.Prism.highlightAll(); // Reloads Prism syntax highlighting after react routings.
  }

  render() {
    return (
      <div id="wrapper">
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};
