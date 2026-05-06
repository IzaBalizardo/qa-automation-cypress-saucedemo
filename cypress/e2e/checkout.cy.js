describe('Checkout SauceDemo', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('Deve finalizar o checkout com sucesso', () => {

    cy.get('[data-test="firstName"]').type('Izabela')
    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    cy.get('.complete-header')
      .should('be.visible')
      .and('contain', 'Thank you for your order!')

  })

  it('Deve exibir erro ao tentar continuar sem preencher nome', () => {

    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')

  })

  it('Deve exibir erro ao tentar continuar sem preencher sobrenome', () => {

    cy.get('[data-test="firstName"]').type('Izabela')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Last Name is required')

  })

  it('Deve exibir erro ao tentar continuar sem preencher CEP', () => {

    cy.get('[data-test="firstName"]').type('Izabela')
    cy.get('[data-test="lastName"]').type('Teste')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Postal Code is required')

  })

})