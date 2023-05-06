/// <reference types="cypress" />

Cypress.Commands.add('loginViaApiSimple', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request('GET', `https://${email}:${password}@${Cypress.env('apiUrl')}/basic_auth`, )
    .then((response) => {
        expect(response.status).to.eq(200)
        cy.get(response.body).should('contain.text', 'Congratulations! You must have the proper credentials')
    })
})

Cypress.Commands.add('loginViaApiIntermediate', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request({
        method: 'GET',
        url: `https://${Cypress.env('apiUrl')}/basic_auth`,
        auth: {
            username: email,
            password: password,
        },
        failOnStatusCode: false,
    })
    .then((response) => {
        expect(response.status).to.eq(200)
        cy.get(response.body).should('contain.text', 'Congratulations! You must have the proper credentials')
    })
})


describe('API Basic Auth Testing', () => {
    it('Successfully login by added directly usernama and password', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully login by added token header to add usernama and password', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully login using cypress API simple custom command', () => {
        cy.loginViaApiSimple();
    })

    it('Successfully login using cypress API intermediate custom command', () => {
        cy.loginViaApiIntermediate();
    })
})

