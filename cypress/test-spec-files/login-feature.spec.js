/// <reference types="cypress" />

import { clickLogin, fillCredentials, clearForm, passwordRequiredIsVisible, usernameRequiredIsVisible } from "../test-management-tool/page-objects/login-page"
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

    it('should display “required field!”, if any of the mandatory fields are missing', () =>{
        clickLogin()
        usernameRequiredIsVisible(true)
        passwordRequiredIsVisible(true)
        fillCredentials(data.username, "", true)
        usernameRequiredIsVisible(false)
        passwordRequiredIsVisible(true)
        clearForm()
        fillCredentials("", data.password, true)
        usernameRequiredIsVisible(true)
        passwordRequiredIsVisible(false)
        clearForm()
    })

    it('should display feedback message if login is invalid', () =>{
        fillCredentials("xpto25@someuser.com", data.password, true)
        clickLogin()
        cy.contains("Invalid username or password.")
        clearForm()
    })

})