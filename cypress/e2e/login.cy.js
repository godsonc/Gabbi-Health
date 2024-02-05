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
    cy.contains('In-app')
    // Selecting the first checkbox on the page
    cy.get('input[type="checkbox"]')
      .first().click();
      //.eq(2).click();


        //cy.get('input[type="checkbox"]')
        //.debug('be.checked')
        //.should('checkbox')

    

})