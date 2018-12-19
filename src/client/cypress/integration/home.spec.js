describe('Player feature', function() {
    beforeEach(function() {
        cy.fixture('server-responses.json').as('config');
    });
    it('should select players', function() {
        cy.visitStubbed('http://localhost:3000/', this.config);
        cy.get('#start-game-btn').should('not.exist');
        cy.get('#select-instructions').should('exist');

        cy.get('#player-list > div:nth-child(1)').click();
        cy.get('#selected-players > div:nth-child(1) h3').should('contain', 'Player 1');

        cy.get('#select-instructions').should('exist');

        cy.get('#player-list > div:nth-child(1)').click();
        cy.get('#selected-players > div:nth-child(2) h3').should('contain', 'Player 2');

        cy.get('#start-game-btn').should('exist');
        cy.get('#select-instructions').should('not.exist');
    });
    it('should not allow adding repeated player', function() {
        cy.visitStubbed('http://localhost:3000/', this.config);
        cy.get('#add-new-player').click();
        cy.get('#new-player-dialog').should('exist');
        cy.get('#new-player-btn').should('be.disabled');
        cy.get('#new-player-name').type('Player 1');
        cy.get('#new-player-btn').should('be.disabled');
        cy.get('#new-player-name').type('Player 15841');
        cy.get('#new-player-btn').should('be.enabled');
    });
    it('should start new game', function() {
        cy.visitStubbed('http://localhost:3000/', this.config);
        
        cy.get('#player-list > div:nth-child(1)').click();
        cy.get('#player-list > div:nth-child(1)').click();
        cy.get('#start-game-btn').click();

        cy.location('pathname').should('include', 'round');

    });
});