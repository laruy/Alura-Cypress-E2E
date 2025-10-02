describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do login corretamente e autenticar o usuário', () => {
        cy.login('laismaruyama@outlook.com', 'Senha.123')
        cy.location('pathname').should('eq', '/home');
    })
})
