const { fakerPT_BR: faker } = require('@faker-js/faker');

describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      const senha = faker.internet.password({
        length: 15,                          // tamanho TOTAL (inclui prefixo)
        pattern: /[A-Za-z0-9]/,                 // só alfanumérico
        prefix: 'A.1',                                 // garante os requisitos
      });

      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="register-button"]').click();

      cy.get('input[name="nome"]').type(faker.internet.username());
      cy.get('input[name="email"]').type(faker.internet.email());
      cy.get('input[name="password"]').type(senha);
      cy.get('input[name="confirm_password"]').type(senha);

      cy.get('[data-test=submit-button]').click();
    })
  })