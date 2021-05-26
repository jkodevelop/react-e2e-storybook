describe('Single Counter', () => {
  it('Checking increment and decrement', () => {
    cy.visit('/')
    cy.contains('Single Counter').click()
    cy.wait(750)
    cy.get('.single-counter-val').contains(0)
    cy.contains('add +').click()
    cy.get('.single-counter-val').contains(1)
    cy.contains('subtract -').click()
    cy.get('.single-counter-val').contains(0)
  })
})