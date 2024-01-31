it('gabbi health', () => {
    cy.visit('/')
    cy.get('[data-testid="test-emailAddress"]')
       .type('dola@yopmail.com')
    cy.get('[data-testid="test-password"]')
       .type('P@ssword01{enter}')
    cy.get('[href="/appointments"]')
      .click()
    cy.get('div.cursor-pointer > .flex')
     .click()

})