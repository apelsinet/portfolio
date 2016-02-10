// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import * as PortfolioActions from '../actions/portfolioActions';

class App extends React.Component {
  render() {
    const { portfolioAppState, actions } = this.props;

    return (
      <Wrapper />
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
