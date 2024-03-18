
it('gabbi health', () => {
   cy.visit('/')
   
   cy.get('[data-testid="test-emailAddress"]')
      .type('dola@yopmail.com')
   
   cy.get('[data-testid="test-password"]')
      .type('P@ssword01{enter}')
      
   cy.get('[href="/appointments"]')
      .click();
   
   cy.get('div.cursor-pointer > .flex')
     .click()
   
   cy.contains('In-app')
   
   // Selecting the first checkbox on the page
   
   cy.get('input[type="checkbox"]')
      .first().click()
   
      // In order to select the second checkbox on the page.
   //.eq(1).click();
   
   // In order to select the third checkbox on the page without interfering with the other checkboxes on the page
   cy.get('input[type="checkbox"]')
      .eq(3).click();
   
  
   // In order to select the last checkbox on the page or just change the numerical number of the .eq(number)

   // Assuming dateInput is the ID of the input field
   cy.get('#datepickerId')
      .click()

   // Assert that the input field value matches the selected date.
   cy.get('.react-datepicker__day--026')
      .click()

   //cy.contains('Note (optional)')
     // .type('Eat well')
   
   cy.contains('Next')
      .click()

   cy.get('input[type="checkbox"]')
      .eq(3).click();
   
   cy.get('[data-testid="test-01:00 PM"]')
      .click()

   cy.contains('Continue')
      .click()

   cy.contains('Next')
      .click()
   
   cy.contains('Proceed to payment')
     .click()
   
   cy.get('[data-testid="test-check"]')
      .click();

   cy.contains('Pay 4000')
     .click();
  
   cy.get('.justify-end > .bg-success')
      .click()
   

   cy.contains('Next')
     .click()  

   cy.contains('e-Shift')
     .click()

   

})
