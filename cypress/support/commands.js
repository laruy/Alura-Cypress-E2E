Cypress.Commands.add('login', (email, senha) => { 
    cy.get('[data-test="input-loginEmail"').type(email);
    cy.get('[data-test="input-loginPassword"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('cadastro', (nome, email, senha, confirmaSenha) => {

    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();

    cy.get('input[name="nome"]').type(nome);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.get('input[name="confirm_password"]').type(confirmaSenha);

    cy.get('[data-test=submit-button]').click();
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })