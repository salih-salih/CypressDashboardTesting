/// <reference types="cypress" />


describe('Web elements',()=>{

//tag name
cy.get('input')

//by ID
cy.get('#radio1')

//by class name
cy.get('.icheck-helper')

//by attribute name
cy.get('[type]')

//by attribute name and value
cy.get('[name="abuse"]')

//by close value
cy.get('[class="icheck-helper"]')

//by tag name and attribute with value
cy.get('input [name="abuse"]')

//by two different attribues
cy.get('[name="abuse][class="icheck-helper][name="abuse"][styles="position: absolute; opacity: 0;]')

cy.contains('Blue').click()




})