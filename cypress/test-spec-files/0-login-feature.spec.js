/// <reference types="cypress" />

import * as loginPage from "../test-management-tool/page-objects/login-page"
import * as topMenu from "../test-management-tool/page-objects/top-menu"

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
        loginPage.fillCredentials(data.username, data.password, true)
        loginPage.clickLogin()
        topMenu.assertDisplayName(data.displayName)
        topMenu.clickLogout()
    })

    it('should display “required field!”, if any of the mandatory fields are missing', () =>{
        loginPage.clickLogin()
        loginPage.usernameRequiredIsVisible(true)
        loginPage.passwordRequiredIsVisible(true)
        loginPage.fillCredentials(data.username, "", true)
        loginPage.usernameRequiredIsVisible(false)
        loginPage.passwordRequiredIsVisible(true)
        loginPage.clearForm()
        loginPage.fillCredentials("", data.password, true)
        loginPage.usernameRequiredIsVisible(true)
        loginPage.passwordRequiredIsVisible(false)
        loginPage.clearForm()
    })

    it('should display feedback message if login is invalid', () =>{
        loginPage.fillCredentials("xpto25@someuser.com", data.password, true)
        loginPage.clickLogin()
        cy.contains("Invalid username or password.")
        loginPage.clearForm()
    })

})