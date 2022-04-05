import{teslaURL} from '../../support/authentication.constant'
import{onModelSPage} from '../../support/modelS'

describe('Tesla.com automation testing',()=>{

    beforeEach("Navigate to page to tesla.com",()=>{
        cy.visit(teslaURL)

    })
    it("Test One",()=>{

        onModelSPage.urlVerification()
        onModelSPage.privacy_verification()

    })

})