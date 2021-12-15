/// <reference types="cypress" />

import * as loginPage from "../test-management-tool/page-objects/login-page"
import * as topMenu from "../test-management-tool/page-objects/top-menu"
import * as homepage from "../test-management-tool/page-objects/homepage"
import * as bddEnvironmentsPage from "../test-management-tool/page-objects/bdd-environments"


describe('Manage BDD Environments journeys (Smoke)', () => {
    var data = {}
    before(()=>{
        cy.fixture('template-test-data.json').then((testData) => {
            data = testData
        })
    })

    beforeEach(()=>{
        cy.visit("/BDDTestSuiteManager/")
        loginPage.fillCredentials(data.username, data.password, true)
        loginPage.clickLogin()
        topMenu.assertDisplayName(data.displayName)
    })

    afterEach(()=>{
        topMenu.clickLogout()
    })

    it('should be able to manage BDD environments and open the add popup. Popup form should be empty', () => {
        homepage.manageBDDEnvironments()
        bddEnvironmentsPage.addNewEnvironment()
        bddEnvironmentsPage.verifyEnvFormIsEmpty()
        bddEnvironmentsPage.closePopup()
    })

    it('should be able to create a new BDD Framework Target Environment', () => {
        homepage.manageBDDEnvironments()
        bddEnvironmentsPage.addNewEnvironment()
        bddEnvironmentsPage.fillNewEnvData(data.bddEnvName, data.bddEnvUrl)
        bddEnvironmentsPage.clickSaveEnvironment()
    })

    it('should be able to search for the created BDD Framework Target Environment and find the correct data', () => {
        homepage.manageBDDEnvironments()
        bddEnvironmentsPage.searchEnv(data.bddEnvName)
        bddEnvironmentsPage.assertNumEnvsFound(1)
        bddEnvironmentsPage.assertEnvData(data.bddEnvName, data.bddEnvUrl, 1)
    })

    it('should be able to search for the created BDD Framework Target Environment and edit its data. The correct data is displayed in the form.', () => {
        homepage.manageBDDEnvironments()
        bddEnvironmentsPage.searchEnv(data.bddEnvName)
        bddEnvironmentsPage.assertNumEnvsFound(1)
        bddEnvironmentsPage.editEnvDetail(1)
        bddEnvironmentsPage.verifyEnvFormHasExpectedData(data.bddEnvName, data.bddEnvUrl)
        bddEnvironmentsPage.closePopup()
    })

    it('should be able to search for the created BDD Framework Target Environment and edit its data, close the edit popup and open a new should show an empty form.', () => {
        homepage.manageBDDEnvironments()
        bddEnvironmentsPage.searchEnv(data.bddEnvName)
        bddEnvironmentsPage.assertNumEnvsFound(1)
        bddEnvironmentsPage.editEnvDetail(1)
        bddEnvironmentsPage.verifyEnvFormHasExpectedData(data.bddEnvName, data.bddEnvUrl)
        bddEnvironmentsPage.closePopup()
        bddEnvironmentsPage.addNewEnvironment()
        bddEnvironmentsPage.verifyEnvFormIsEmpty()
        bddEnvironmentsPage.closePopup()
    })

    it('should be able to search for the created BDD Framework Target Environment and delete it.', () => {
        homepage.manageBDDEnvironments()
        bddEnvironmentsPage.searchEnv(data.bddEnvName)
        bddEnvironmentsPage.assertNumEnvsFound(1)
        bddEnvironmentsPage.deleteEnvironment(1)
        bddEnvironmentsPage.clearSearch()
        bddEnvironmentsPage.clickBack()
    })

})