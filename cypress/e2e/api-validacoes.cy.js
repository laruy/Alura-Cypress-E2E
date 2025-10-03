describe('API AdoPet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZjFlZDkzZS1jMjljLTQ2MGUtYmJkOC1mYmYxYWE4MjU4MGYiLCJhZG9wdGVyTmFtZSI6IkxhaXMiLCJpYXQiOjE3NTkzMzIyMjAsImV4cCI6MTc1OTU5MTQyMH0.aYyXWmbo9RvT-SN2WuaIZnHxhf5Yp960ShfYlaWdGww`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/af1ed93e-c29c-460e-bbd8-fbf1aa82580f',
            headers: {authorization}
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
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Lais')
        })
    })
})