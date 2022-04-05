


describe('Login Page Smoke Test',()=>{
    it('Positive testing',()=>{
        cy.login_Positive_Scenarios()
    })
    it('Wrong username right password Negative testing',()=>{
        cy.Negative_Password_Testing()

    })
    it('Negative Testing Wrong Username',()=>{
        cy.Negative_Username_Testing()
    })

    it('Negative Wrong username and Password testing',()=>{
        cy.Negative_Username_Password_Testing()
    })

})