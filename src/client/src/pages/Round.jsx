import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Round from '../components/Round'
import { Button, withStyles } from '@material-ui/core';
import { getCurrentMoves, getPlayer1, getPlayer2 } from '../redux/selectors/matchInProgress';
import { player1Move, player2Move, addPrevRound, createNewRound, resetRound } from '../redux/actions/round';
import MarchSummary from '../components/MatchSummary';
import { resetMatch } from '../redux/actions/matchInProgress';
import Loading from '../components/Loading';

const styles = () => ({
  button: {
    marginTop: '50px',
    position: 'relative',
    left: '40%'
  },
  loading: {
    padding: 10,
    position: 'relative',
    left: '50%'
  },
});

export class RoundPage extends Component {
  static propTypes = {
    prev_rounds: PropTypes.array,
    p1_move: PropTypes.any,
    p2_move: PropTypes.any,
    moves: PropTypes.array,
  }

  onSelectMove1 = (move) => {
    this.props.player1Move(move);
  }
  onSelectMove2 = (move) => {
    this.props.player2Move(move);
  }
  play = () => {
    const { p1_move, p2_move, prev_rounds = [], player1, player2, matchId } = this.props;

    this.props.newRound(p1_move, player1, p2_move, player2, matchId, prev_rounds, (a) => {
      console.log(a);
    });
  }
  newGame = () => {
    this.props.resetRound();
    this.props.resetMatch();
    this.props.history.push('/');
  }

  render() {
    const { moves, inProgress, p1_move, p2_move, prev_rounds, classes, player1, player2, winner } = this.props;
    return (
      <div>
        {
          prev_rounds.length !== 0 &&
          <MarchSummary rounds={prev_rounds} winner={winner} onNewGame={this.newGame} />
        }
        <Loading loading={inProgress} className={classes.loading}>

        </Loading>
        {
          !winner && <Round move1={p1_move} move2={p2_move} moves={moves} onSelectMove1={this.onSelectMove1} onSelectMove2={this.onSelectMove2} p1_name={player1.name} p2_name={player2.name} />
        }
        {
          p1_move && p2_move &&
          <Button id="go-btn" variant="contained" color="primary" onClick={this.play} className={classes.button}>
            GO!
          </Button>
        }
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  prev_rounds: state.round.prev_rounds,
  winner: state.round.winner,
  matchId: state.matchInProgress.matchId,
  inProgress: state.round.in_progress,
  p1_move: state.round.p1_move,
  p2_move: state.round.p2_move,
  player1: getPlayer1(state),
  player2: getPlayer2(state),
  moves: getCurrentMoves(state)
})

const mapDispatchToProps = (dispatch) => {
  const newRound = createNewRound(dispatch);
  return {
    newRound: (p1Move, p1Id, p2Move, p2Id, matchId, prev_rounds, cb) => dispatch(newRound(p1Move, p1Id, p2Move, p2Id, matchId, prev_rounds, cb)),
    addPrevRound: (winner, moves, matchWinner, name) => dispatch(addPrevRound(winner, moves, matchWinner, name)),
    player1Move: (move) => dispatch(player1Move(move)),
    player2Move: (move) => dispatch(player2Move(move)),
    resetMatch: () => dispatch(resetMatch()),
    resetRound: () => dispatch(resetRound()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RoundPage))
