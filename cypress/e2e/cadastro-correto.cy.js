const { fakerPT_BR: faker } = require('@faker-js/faker');

describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      const senha = faker.internet.password({
        length: 15,                          // tamanho TOTAL (inclui prefixo)
        pattern: /[A-Za-z0-9]/,                 // só alfanumérico
        prefix: 'A.1',                                 // garante os requisitos
      });

      cy.cadastro(faker.internet.username(), faker.internet.email(), senha, senha)
    })
  })