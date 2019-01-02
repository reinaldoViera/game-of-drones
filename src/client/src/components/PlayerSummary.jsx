import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, withStyles, CircularProgress } from '@material-ui/core';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

export const playerSummary = gql`
query playerSummary($id: ID!){
  playerSummary(id: $id) {
    matchs
    wins
  }
}
`

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export class PlayerSummary extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.any,
  }
  
  render() {
    return (
      <Query query={playerSummary} variables={{ id: this.props.id}}  pollInterval={3000}>
        {
          ({ loading, error, data }) => (
            <Paper className={this.props.classes.root} elevation={5}>
              <Typography variant="h5" component="h3">
                {
                  this.props.name
                }
              </Typography>
              {
                loading ? <CircularProgress /> :
                  <Typography variant="h5" component="h4">
                    {
                      `Matchs: ${data.playerSummary.matchs}`
                    }
                    <br/>
                    {
                      `Wins: ${data.playerSummary.wins}`
                    }
                  </Typography>
              }
            </Paper>
          )
        }

      </Query>
    )
  }
}

export default withStyles(styles)(PlayerSummary);
