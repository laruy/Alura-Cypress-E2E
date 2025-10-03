describe('Testes na página de exemplo do cypress', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('Verifique se a funcionalidade de delete funciona', () => {
        cy.get('.new-todo').type('Teste{enter}')

        cy.contains('.todo-list li .view label', 'Teste')
        .siblings('button.destroy.todo-button')
        .invoke('show')          // aplica no botão, não no <li>
        .should('be.visible')
        .click()

        cy.get('.todo-list li')
        .should('not.contain', 'Teste')
    })

    it('Verifique se a funcionalidade de filtrar tarefas funciona', () => {
        // cria dois itens
        cy.get('.new-todo').type('Complete{enter}')
        cy.get('.new-todo').type('Active{enter}')

        // marca o item "Complete" como concluído (checa o checkbox do próprio li)
        cy.contains('.todo-list li .view label', 'Complete')
            .parents('li')
            .find('input.toggle')
            .check() // ou .click()

        // Filtro: All
        cy.contains('.filters a', 'All').click()
        cy.get('.todo-list li')
            .and('contain.text', 'Complete')
            .and('contain.text', 'Active')

        // Filtro: Active (deve mostrar só o "Active")
        cy.contains('.filters a', 'Active').click()
        cy.get('.todo-list li')
            .and('contain.text', 'Active')

        // Filtro: Completed (deve mostrar só o "Complete")
        cy.contains('.filters a', 'Completed').click()
        cy.get('.todo-list li')
            .should('have.length', 1)
            .and('contain.text', 'Complete')
    })
})