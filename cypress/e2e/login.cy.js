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
    //cy.get('.md\:grid-cols-2 > :nth-child(1) > .grid > :nth-child(1)')
      // .click()

})