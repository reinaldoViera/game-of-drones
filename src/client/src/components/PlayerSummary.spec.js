import {
    MockedProvider
} from 'react-apollo/test-utils';
import React from 'react';
import {PlayerSummary, playerSummary} from './PlayerSummary';
import renderer from 'react-test-renderer';
import wait from 'waait';


const mocks = [{
    request: {
        query: playerSummary(1)
    },
    result: {
        data: {
            playerSummary: {
                matchs: 5,
                wins: 3
            },
        },
    },
}]

describe('PlayerSummary component', () => {
    test('should render result data', async () => {
        const result = renderer.create( 
            <MockedProvider mocks={mocks} addTypename={false}>
                <PlayerSummary name="Player 1" id='1' classes={{}}/>
            </MockedProvider>,
        ).toJSON();
        await wait(1); // wait for response
        expect(result).toMatchSnapshot();
    })

})