import match from './mutation/match';
import round from './mutation/round';
import player from './mutation/player';
import configuration from './mutation/configuration';

export default {
    ...player,
    ...match,
    ...configuration,
    ...round
}