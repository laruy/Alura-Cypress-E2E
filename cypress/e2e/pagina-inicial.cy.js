describe('Página Inicial', () => {

    context('Não utiliza login na validação', () => {

        beforeEach(() => {
            cy.visit('https://adopet-frontend-cypress.vercel.app');
        })

        it('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”', () => {

            cy.location('pathname').should('eq', '/');
            cy.contains('a', 'Ver pets').click();
            cy.location('pathname').should('eq', '/home');
        })

        it('Visite a página de principal do AdoPet e teste os botões header e elementos da tela', () => {

            cy.location('pathname').should('eq', '/');
            cy.title().should('eq', 'AdoPet');
            cy.contains('p', 'Quem ama adota!')
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!')
            cy.get('.header__message').click();
            cy.location('pathname').should('eq', '/login');
        })

        it('Teste o login com um fluxo diferente', () => {
            cy.get('.header__message').click();
            cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
            cy.get('[data-test="input-loginPassword"]').type('Senha123');
            cy.get('[data-test="submit-button"]').click();  
            cy.location('pathname').should('eq', '/home');
        })
    })

    context('Utiliza login na validação', () => {

        beforeEach('Realiza login', () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app');
            cy.get('[data-test="login-button"]').click();
            cy.get('[data-test="input-loginEmail"').type('laismaruyama@outlook.com');
            cy.get('[data-test="input-loginPassword"]').type('Senha.123');
            cy.get('[data-test="submit-button"]').click();
            cy.get('.header__home').should('be.visible').click();
        })


        it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.', () => {
            // primeiro "Falar com responsável"
            cy.get('a.card__contact[aria-label="Falar com responsável"]').first().click();
            cy.location('pathname').should('eq', '/mensagem');
        })
    })
})