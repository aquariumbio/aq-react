describe('Aquarium Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })

    it('contains navigation tabs', () => {
        cy.get('button')
            .click()
    })
})