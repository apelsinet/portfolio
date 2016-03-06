// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Burgermenu from '../components/Burgermenu';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import * as PortfolioActions from '../actions/portfolioActions';

class App extends React.Component {
  render() {
    const { portfolioAppState, actions } = this.props;

    return (
      <div id="wrapper">
        <Burgermenu />
        <header><Header /></header>
        <main><Main /></main>
        <footer><Footer /></footer>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  portfolioAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    portfolioAppState: state.portfolioAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PortfolioActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
