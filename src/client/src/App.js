import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import Routes from './pages/Routes'
import store from './redux';
import { ApolloProvider } from 'react-apollo';
import { client } from './redux/actions/common';
import './App.css'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: 20,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});

class App extends Component {
  render() {

    return (
      <div className={this.props.classes.layout}>
        <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Routes/>
          </Router>
        </Provider>
        </ApolloProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
