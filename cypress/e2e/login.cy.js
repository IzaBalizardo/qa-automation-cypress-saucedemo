describe('Login SauceDemo', () => {

  it('Deve realizar login com sucesso', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory')
  })

})


it('Deve exibir erro ao tentar login inválido', () => {

  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('usuario_errado')
  cy.get('[data-test="password"]').type('senha_errada')
  cy.get('[data-test="login-button"]').click()

  cy.get('[data-test="error"]').should('be.visible')

})