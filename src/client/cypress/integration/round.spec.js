describe('Round page', function () {
    beforeEach(function () {
        cy.fixture('server-responses.json').as('config');
    });
    it('finish a game', function () {
        cy.visitStubbed('http://localhost:3000/', this.config);

        cy.get('#player-list > div:nth-child(1)').click();
        cy.get('#player-list > div:nth-child(1)').click();
        cy.get('#start-game-btn').click();

        cy.get('#go-btn').should('not.exist');
        cy.get('#p1-moves > div:nth-child(1)').click();
        cy.get('#p1-moves').should('not.exist');
        cy.get('#p2-moves > div:nth-child(1)').click();
        cy.get('#p2-moves').should('not.exist');
        cy.get('#go-btn').should('exist');
        cy.get('#go-btn').click();
        cy.get('#summary-table').should('exist');
        cy.get('#summary-table > tbody > tr:nth-child(2) > td:nth-child(2)').should('contain', 'Player 1');

        cy.get('#p1-moves > div:nth-child(1)').click();
        cy.get('#p2-moves > div:nth-child(1)').click();
        cy.get('#go-btn').click();
        cy.get('#summary-table > tbody > tr:nth-child(3) > td:nth-child(2)').should('contain', 'Player 1');
        cy.get('#new-game-btn').should('exist');
        cy.get('#new-game-btn').click();
        cy.location('pathname').should('equal', '/');

    });
})