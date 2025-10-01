const { fakerPT_BR: faker } = require('@faker-js/faker');

describe('Página Inicial', () => {

    it('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('a[aria-label="Tela inicial"]').should('be.visible').click();
        cy.location('pathname').should('eq', '/');
        cy.contains('a', 'Ver pets').click();
        cy.location('pathname').should('eq', '/home');
    })

    it('Visite a página de principal do AdoPet e teste os botões header', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('a[aria-label="Tela inicial"]').should('be.visible').click();
        cy.location('pathname').should('eq', '/');
        cy.get('a[aria-label="Ir para Mensagens"]').should('be.visible').click();
        cy.location('pathname').should('eq', '/login');
    })

    context('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.', () => {

        beforeEach('Realiza login', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app');
            cy.get('[data-test="login-button"]').click();
            cy.get('[data-test="input-loginEmail"').type('laismaruyama@outlook.com');
            cy.get('[data-test="input-loginPassword"]').type('Senha.123');
            cy.get('[data-test="submit-button"]').click();
            cy.location('pathname').should('eq', '/home');
        })

        it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.', () => {
            // primeiro "Falar com responsável"
            cy.get('a.card__contact[aria-label="Falar com responsável"]').first().click();
            cy.location('pathname').should('eq', '/mensagem');
        })
    })
})