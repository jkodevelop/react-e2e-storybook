describe('Even Counter', () => {
  it('Checking increment and decrement', () => {
    cy.visit('/even')
    cy.wait(500)
    cy.get('.even-counter-val').contains(0)
    cy.contains('+ add 2').click()
    cy.get('.even-counter-val').contains(2)
    cy.contains('- subtract 2').click()
    cy.get('.even-counter-val').contains(0)
  })
})