
var data = require('../../fixtures/states.json')
describe("Dropdown Testing",()=>{

    it('State Selected',()=>{
        cy.visit('http://practice.cybertekschool.com/dropdown')

        cy.get('[id="state"] > option').each(($el,index)=>{

            const text = $el.text()

            expect(text).to.contain(data.states[index])

            cy.get('[id="state"]').select($el.text()).should('be.visible')

        })
    })
})

//navigate to page to http://practice.cybertekschool.com/dropdown
//select your bday by yyyy/mm/dd