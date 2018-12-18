import { combineReducers } from 'redux';
import match from './match';
import configuration from './configuration';
import matchInProgress from './matchInProgress';
import player from './player';
import move from './move';
import round from './rounds';

export default combineReducers({match, configuration, matchInProgress, player, move, round})