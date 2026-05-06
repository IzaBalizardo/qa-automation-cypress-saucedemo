describe('Carrinho SauceDemo', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Deve adicionar um produto ao carrinho com sucesso', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible')

  })

  it('Deve exibir o produto dentro do carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    cy.get('.inventory_item_name')
      .should('contain', 'Sauce Labs Backpack')

  })

  it('Deve remover um produto do carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('not.exist')

  })

})