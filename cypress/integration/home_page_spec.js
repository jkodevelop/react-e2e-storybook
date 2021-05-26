describe('Homepage', () => {
  it('Checking the front page loads', () => {
    // cy.visit('http://localhost:9001') // without baseUrl in cypress.json
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('Française').click()
    cy.contains('Bienvenue')
  })

  it('Load Single Counter', () => {
    // cy.visit('http://localhost:9001') // without baseUrl in cypress.json
    cy.visit('/')
    cy.contains('Single Counter').click()
    cy.wait(750)
    cy.contains('add +')
  })

  it('Load Even Counter', () => {
    // cy.visit('http://localhost:9001') // without baseUrl in cypress.json
    cy.visit('/')
    cy.contains('Even Counter').click()
    cy.wait(750)
    cy.contains('+ add 2')
  })
})