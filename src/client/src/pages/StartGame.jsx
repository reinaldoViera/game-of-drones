import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStartMatch, setPlayer1, setPlayer2 } from '../redux/actions/matchInProgress';
import { createLoadPlayers, createFetchNewPlayer } from '../redux/actions/player';
import { createLoadConfigurations } from '../redux/actions/configuration';
import { getPlayers } from '../redux/selectors/player';
import PlayerList from '../components/PlayerList';
import SelectedPlayers from '../components/SelectedPlayers';
import { getPlayer1, getPlayer2 } from '../redux/selectors/matchInProgress';
import { withStyles, Button, Paper, Typography } from '@material-ui/core';
import { createLoadMoves } from '../redux/actions/move';
import Loading from '../components/Loading';

const styles = () => ({
  instruction: {
    padding: 10,
    margin: 10,
    textAlign: 'center'
  },
  loading: {
    position: 'relative',
    left: '50%'
  },
  button: {
    marginTop: '50px',
    position: 'relative',
    left: '40%'
  }
});

export class StartGame extends Component {
  static propTypes = {
    players: PropTypes.array,
    player2: PropTypes.oneOfType([PropTypes.object, PropTypes.bool,]),
    player1: PropTypes.oneOfType([PropTypes.object, PropTypes.bool,]),
    configurations: PropTypes.object,
    loadingPlayers: PropTypes.bool,
    loadingConfiguration: PropTypes.bool,
  }
  componentDidMount() {
    const { players, loadingPlayers, loadPlayers, configurations, loadingConfiguration, loadConfigurations, moves, loadMoves } = this.props;
    if (Object.entries(players) && !loadingPlayers) {
      loadPlayers();
    }
    if (Object.entries(configurations) && !loadingConfiguration) {
      loadConfigurations();
    }
    if (Object.entries(moves)) {
      loadMoves();
    }

  }

  selectPlayer = (pId) => {
    if (!this.props.player1) {
      this.props.setPlayer1(pId);
    } else if (!this.props.player2) {
      this.props.setPlayer2(pId);

    }
  }

  playersToSelect = () => {
    return this.props.players.filter(player => {
      let p1 = true;
      let p2 = true;
      if (this.props.player1) {
        p1 = player.id !== this.props.player1.id;
      }
      if (this.props.player1) {
        p2 = player.id !== this.props.player2.id;
      }
      return p1 && p2;
    })
  }

  startGame = () => {

    this.props.startMatch(this.props.player1.id, this.props.player2.id, '1', () => {
      this.props.history.push('/round');
    })
  }

  render() {
    return (
      <div>
        <Loading loading={this.props.loadingPlayers} className={this.props.classes.loading}>
          <PlayerList players={this.playersToSelect()} selectPlayer={this.selectPlayer} createPlayer={this.props.createPlayer} />
        </Loading>
        {
          (!this.props.player1 || !this.props.player2) &&
          <Paper elevation={5} className={this.props.classes.instruction}>
            <Typography variant="h5" component="h3">
              Select your players
            </Typography>
          </Paper>
        }
        <SelectedPlayers player1={this.props.player1} player2={this.props.player2} />
        {
          this.props.player1 && this.props.player2 &&
          <Button variant="contained" color="primary" onClick={this.startGame} className={this.props.classes.button}>
            Start Game
          </Button>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  player1: getPlayer1(state),
  player2: getPlayer2(state),
  players: getPlayers(state),
  loadingPlayers: state.player.loading,
  configurations: state.configuration.configurations,
  moves: state.move.moves,
  loadingConfiguration: state.configuration.loading,
})

const mapDispatchToProps = (dispatch) => {
  const startMatch = createStartMatch(dispatch);
  const loadPlayers = createLoadPlayers(dispatch);
  const loadConfigurations = createLoadConfigurations(dispatch);
  const createPlayer = createFetchNewPlayer(dispatch);
  const loadMoves = createLoadMoves(dispatch);
  return {
    setPlayer1: (id) => dispatch(setPlayer1(id)),
    setPlayer2: (id) => dispatch(setPlayer2(id)),
    startMatch: (p1Id, p2Id, configId, cb) => dispatch(startMatch(p1Id, p2Id, configId, cb)),
    loadPlayers: () => dispatch(loadPlayers()),
    createPlayer: (name) => dispatch(createPlayer(name)),
    loadMoves: () => dispatch(loadMoves()),
    loadConfigurations: () => dispatch(loadConfigurations()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StartGame))
