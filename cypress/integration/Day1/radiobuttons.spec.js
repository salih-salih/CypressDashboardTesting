/// <reference types="cypress" />

import {URL} from '../../support/authentication'
import {CNA} from '../../support/CNW'

describe('Radio button Tests',()=>{

    beforeEach('opening the URL', ()=>{
        cy.visit(URL)
    })
    

    it('verify All the radio buttons are checked',()=>{

        CNA.function1()
        CNA.function2()
    })
    it('verify All the radio buttons are checked',()=>{

        CNA.function1()
        CNA.function2()
    })


    
})