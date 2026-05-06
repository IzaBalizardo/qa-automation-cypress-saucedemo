describe('Login SauceDemo', () => {

  it('Deve realizar login com sucesso', () => {

    cy.login('standard_user', 'secret_sauce')

    cy.url().should('include', '/inventory')

  })

  it('Deve exibir erro ao tentar login inválido', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('usuario_errado')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

  it('Deve exibir erro ao tentar login sem usuário', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')

  })

  it('Deve exibir erro ao tentar login sem senha', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')

  })

  it('Deve exibir erro ao tentar login com usuário bloqueado', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

})