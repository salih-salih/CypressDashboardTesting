
import { username,password,wrongpassword,wrongusername,url } from './authentication.constant'




Cypress.Commands.add('login_Positive_Scenarios', ()=>{
   cy.visit(url)
   cy.get('#email').clear().type(username)
   cy.get('#pass').clear().type(password)
   cy.get('[data-testid="royal_login_button"]').click()
})

Cypress.Commands.add('Negative_Password_Testing', ()=>{
    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
 })

 Cypress.Commands.add('Negative_Username_Testing', ()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(password)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
 })

 Cypress.Commands.add('Negative_Username_Password_Testing', ()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
 })