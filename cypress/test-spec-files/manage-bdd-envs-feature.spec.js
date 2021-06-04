/// <reference types="cypress" />

import { clickLogin, fillCredentials } from "../test-management-tool/page-objects/login-page"
import { assertDisplayName, clickAppTitle, clickLogout } from "../test-management-tool/page-objects/top-menu"
import { manageBDDEnvironments } from "../test-management-tool/page-objects/homepage"
import { clickBack, addNewEnvironment, fillNewEnvData, verifyEnvFormIsEmpty, closePopup, clickSaveEnvironment, searchEnv, clearSearch, assertEnvData, assertNumEnvsFound, deleteEnvironment, editEnvDetail, verifyEnvFormHasExpectedData } from "../test-management-tool/page-objects/bdd-environments"

describe('Manage BDD Environments journeys', () => {
    var data = {}
    before(()=>{
        cy.fixture('login-feature.json').then((testData) => {
            data = testData
        })
    })

    beforeEach(()=>{
        cy.visit("/BDDTestSuiteManager/")
        fillCredentials(data.username, data.password, true)
        clickLogin()
        assertDisplayName(data.displayName)
    })

    afterEach(()=>{
        clickLogout()
    })

    it('should be able to manage BDD environments and open the add popup. Popup form should be empty', () => {
        manageBDDEnvironments()
        addNewEnvironment()
        verifyEnvFormIsEmpty()
        closePopup()
    })

    it('should be able to create a new BDD Framework Target Environment', () => {
        manageBDDEnvironments()
        addNewEnvironment()
        fillNewEnvData(data.bddEnvName, data.bddEnvUrl)
        clickSaveEnvironment()
    })

    it('should be able to search for the created BDD Framework Target Environment and find the correct data', () => {
        manageBDDEnvironments()
        searchEnv(data.bddEnvName)
        assertNumEnvsFound(1)
        assertEnvData(data.bddEnvName, data.bddEnvUrl, 1)
    })

    it('should be able to search for the created BDD Framework Target Environment and edit its data. The correct data is displayed in the form.', () => {
        manageBDDEnvironments()
        searchEnv(data.bddEnvName)
        assertNumEnvsFound(1)
        editEnvDetail(1)
        verifyEnvFormHasExpectedData(data.bddEnvName, data.bddEnvUrl)
        closePopup()
    })

    it('should be able to search for the created BDD Framework Target Environment and edit its data, close the edit popup and open a new should show an empty form.', () => {
        manageBDDEnvironments()
        searchEnv(data.bddEnvName)
        assertNumEnvsFound(1)
        editEnvDetail(1)
        verifyEnvFormHasExpectedData(data.bddEnvName, data.bddEnvUrl)
        closePopup()
        addNewEnvironment()
        verifyEnvFormIsEmpty()
        closePopup()
    })

    it('should be able to search for the created BDD Framework Target Environment and delete it.', () => {
        manageBDDEnvironments()
        searchEnv(data.bddEnvName)
        assertNumEnvsFound(1)
        deleteEnvironment(1)
        clearSearch()
        clickBack()
    })

})