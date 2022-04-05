/// <reference types="cypress" />

describe('checkboxes testing',()=>{

    it('Checkbox testing',()=>{
        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.get('#box1').check().should('be.checked')

        //cy.viewport('ipad-mini')
        //cy.get('#box1').check().should('not.be.checked')
        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })

    it('Checkbox testing',()=>{
        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.get('#box1').check().should('be.checked')

        //cy.viewport('iphone-xr')
        //cy.get('#box1').check().should('not.be.checked')
        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })
})