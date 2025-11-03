describe('API AdoPet', () => {

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/af1ed93e-c29c-460e-bbd8-fbf1aa82580f',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })

    it('Perfil da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/af1ed93e-c29c-460e-bbd8-fbf1aa82580f',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Lais')
        })
    })
})