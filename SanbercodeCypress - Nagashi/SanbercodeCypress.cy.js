describe('My First Test', () => {
  it('Login Success', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")

    cy.get('#password').type("SuperSecretPassword!")

    cy.get('.fa').click()
  })

  it('Login with wrong Username', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("Nagashi")

    cy.get('#password').type("SuperSecretPassword!")

    cy.get('.fa').click()

    cy.get('#flash').click()
  })

  it('Login with empty password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")

    cy.get('#password').type("SuperSecretPassword")

    cy.get('.fa').click()

    cy.get('#flash').click()
  })

  it('Login with wrong email and password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("Nagashi")

    cy.get('#password').type("SuperSecretPassword")

    cy.get('.fa').click()

    cy.get('#flash').click()
  })

  it('Logout success', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type("tomsmith")
  
      cy.get('#password').type("SuperSecretPassword!")
  
      cy.get('.fa').click()

      cy.get('.icon-2x').click()
  })
})