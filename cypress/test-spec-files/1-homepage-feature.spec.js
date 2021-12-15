/// <reference types="cypress" />

import * as loginPage from "../test-management-tool/page-objects/login-page"
import * as topMenu from "../test-management-tool/page-objects/top-menu"
import * as homepage from "../test-management-tool/page-objects/homepage"

describe('Manage BDD Test Projects homepage journeys (Smoke)', () => {
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

    it('should be able open the New project popup. Popup form should be empty', () => {
        homepage.newProjectPopup()
        homepage.assertEmptyPopupForm()
        homepage.closeProjectPopup()
    })

    it('should be able open the New project popup, fill a project name, then close the popup and open again & form should be empty again', () => {
        homepage.newProjectPopup()
        homepage.assertEmptyPopupForm()
        homepage.setNewProjectData(data.testProjName)
        homepage.closeProjectPopup()
        homepage.newProjectPopup()
        homepage.assertEmptyPopupForm()
        homepage.closeProjectPopup()
    })

    it('should be able to create a new test project and see a message displaying "project created"', () => {
        homepage.newProjectPopup()
        homepage.assertEmptyPopupForm()
        homepage.setNewProjectData(data.testProjName)
        homepage.saveNewProject()
        cy.contains("Project created")
    })

    it('should be able to search for the created test project.', () => {
        homepage.searchProj(data.testProjName)
        homepage.assertProjData(data.testProjName, 1, true, 1)
        homepage.clearSearch()
    })

    it('should be able to search for the created test project, click delete, cancel on the confirmation dialog and still be able to find it in the list.', () => {
        homepage.searchProj(data.testProjName)
        homepage.assertProjData(data.testProjName, 1, true, 1)
        homepage.deleteProject(1, false)
        homepage.assertProjData(data.testProjName, 1, true, 1)
        homepage.clearSearch()
    })    

    it('should be able to search for the created test project and delete it. Should no longer find it', () => {
        homepage.searchProj(data.testProjName)
        homepage.assertProjData(data.testProjName, 1, true, 1)
        homepage.deleteProject(1, true)
        homepage.assertProjectRowsFound(0)
        homepage.clearSearch()
    })

})

