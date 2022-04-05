//const { should } = require("chai")

<reference types="cypress" />
//visit
cy.visit('open url')
cy.visit('url',{timeout : 10000})

//should is promise in here
let path ='https://www.google.com'
cy.url().should('include', path)

//finding the element
//loc is the reference
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative ones
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.lenght',3)
cy.get('h1').should('have.text','blablabla')
cy.get('h1').should('have.value','cypress')


//parent to the child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click()

cy.go('back')
cy.get('tbody tr').nextAll.click({multiple:true})//10 elements


cy.get(loc).prev().click()
cy.get(loc).prevAll().click()

//position handling
//https://the-internet.herokuapp.com/login
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()

cy.get('username').clear().type('username')








