/// <reference types="cypress" />

import { clickLogin, fillCredentials } from "../test-management-tool/page-objects/login-page"
import { assertDisplayName, clickLogout } from "../test-management-tool/page-objects/top-menu"

describe('login feature', () => {
    var data = {}
    before(()=>{
        cy.fixture('login-feature.json').then((testData) => {
            data = testData
        })
    })

    beforeEach(()=>{
        cy.visit("/BDDTestSuiteManager/")

    })

    it('should login with success and logout', () => {
        fillCredentials(data.username, data.password, true)
        clickLogin()
        assertDisplayName(data.displayName)
        clickLogout()
    })

})