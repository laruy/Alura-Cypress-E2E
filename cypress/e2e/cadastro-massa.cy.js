import { usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuáirio', () => {
            cy.cadastro(usuario.name, usuario.email, usuario.password, usuario.password)
        })
    })

})