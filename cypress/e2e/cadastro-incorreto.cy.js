const { fakerPT_BR: faker } = require('@faker-js/faker');

describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })

    it('Não preencher os campos do formulário e exibir mensagens ao usuário', () => {
        cy.get('[data-test=submit-button]').click();

        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    })

    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () =>{
        cy.get('input[name="nome"]').type('lais');
        cy.get('input[name="email"]').type('lais');
        cy.get('input[name="password"]').type('123');
        cy.get('input[name="confirm_password"]').type('456');

        cy.get('[data-test=submit-button]').click();

        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
        cy.contains('As senhas não batem').should('be.visible');
    })
})

